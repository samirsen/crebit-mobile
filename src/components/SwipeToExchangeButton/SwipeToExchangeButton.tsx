import React, { useRef, useState, useEffect, useCallback, useMemo, memo } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  ViewStyle,
  TextStyle,
  Alert,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { StyledText } from '../StyledText';
import CustomIcon from '../CustomIcon/CustomIcon';

const { width: screenWidth } = Dimensions.get('window');

export interface SwipeToPayButtonProps {
  onSwipeComplete?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  amount?: string;
  currency?: string;
  resetOnComplete?: boolean;
}

export const SwipeToPayButton: React.FC<SwipeToPayButtonProps> = memo(({
  onSwipeComplete,
  disabled = false,
  style,
  amount,
  currency = 'USD',
  resetOnComplete = false,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Text & shimmer animation values
  const textGlow = useRef(new Animated.Value(0)).current;
  const textPulse = useRef(new Animated.Value(0)).current;
  const shimmer1Position = useRef(new Animated.Value(0)).current;
  const shimmer2Position = useRef(new Animated.Value(0)).current;
  const shimmer3Position = useRef(new Animated.Value(0)).current;
  const arrowAnimation = useRef(new Animated.Value(0)).current;

  // New moving gradient animation (for swipe direction)
  const gradientAnim = useRef(new Animated.Value(0)).current;

  const resetButton = useCallback(() => {
    setIsCompleted(false);
    setIsAnimating(false);
    translateX.setValue(0);
    textGlow.setValue(0);
    textPulse.setValue(0);
    shimmer1Position.setValue(0);
    shimmer2Position.setValue(0);
    shimmer3Position.setValue(0);
    gradientAnim.setValue(0);
  }, [translateX, textGlow, textPulse, shimmer1Position, shimmer2Position, shimmer3Position, gradientAnim]);

  const buttonDimensions = useMemo(() => ({
    buttonWidth: screenWidth * 0.8,
    thumbSize: 60,
    get maxSwipeDistance() {
      return this.buttonWidth - this.thumbSize - 16;
    },
  }), []);

  const { buttonWidth, maxSwipeDistance } = buttonDimensions;

  // Animated text glow and pulse
  useEffect(() => {
    if (!isCompleted && !disabled) {
      Animated.sequence([
        Animated.timing(textGlow, { toValue: 1, duration: 800, useNativeDriver: false }),
        Animated.timing(textGlow, { toValue: 0.3, duration: 600, useNativeDriver: false }),
      ]).start();

      const pulseLoop = Animated.loop(
        Animated.sequence([
          Animated.timing(textPulse, { toValue: 1, duration: 2000, useNativeDriver: false }),
          Animated.timing(textPulse, { toValue: 0, duration: 2000, useNativeDriver: false }),
        ])
      );
      pulseLoop.start();
      return () => pulseLoop.stop();
    }
  }, [isCompleted, disabled, textGlow, textPulse]);

  // Shimmer animation for text
  useEffect(() => {
    if (!isCompleted && !isAnimating && !disabled) {
      const createShimmerAnimation = (ref: Animated.Value, delay: number) =>
        Animated.loop(
          Animated.sequence([
            Animated.delay(delay),
            Animated.timing(ref, { toValue: 1, duration: 1800, useNativeDriver: true }),
            Animated.delay(200),
            Animated.timing(ref, { toValue: 0, duration: 0, useNativeDriver: true }),
          ])
        );

      const s1 = createShimmerAnimation(shimmer1Position, 0);
      const s2 = createShimmerAnimation(shimmer2Position, 200);
      const s3 = createShimmerAnimation(shimmer3Position, 400);
      s1.start(); s2.start(); s3.start();
      return () => { s1.stop(); s2.stop(); s3.stop(); };
    }
  }, [isCompleted, isAnimating, disabled, shimmer1Position, shimmer2Position, shimmer3Position]);

  // Arrow animation
  useEffect(() => {
    if (!isCompleted && !isAnimating && !disabled) {
      const loop = Animated.loop(
        Animated.sequence([
          Animated.timing(arrowAnimation, { toValue: 1, duration: 800, useNativeDriver: true }),
          Animated.timing(arrowAnimation, { toValue: 0, duration: 800, useNativeDriver: true }),
        ])
      );
      loop.start();
      return () => loop.stop();
    } else {
      arrowAnimation.stopAnimation();
      arrowAnimation.setValue(0);
    }
  }, [isCompleted, isAnimating, disabled, arrowAnimation]);

  // Moving gradient animation (new feature)
  useEffect(() => {
    if (!isCompleted && !disabled) {
      const animateGradient = () => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(gradientAnim, {
              toValue: 1,
              duration: isAnimating ? 1000 : 2500,
              useNativeDriver: true,
            }),
            Animated.timing(gradientAnim, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ])
        ).start();
      };
      animateGradient();
      return () => gradientAnim.stopAnimation();
    }
  }, [gradientAnim, isCompleted, disabled, isAnimating]);

  const handlePaymentSuccess = useCallback(() => {
    const msg = amount
      ? `Your payment of ${amount} ${currency} has been successfully processed!`
      : 'Your payment has been successfully processed!';
    Alert.alert('Payment Successful', msg, [
      {
        text: 'OK',
        onPress: () => {
          if (resetOnComplete) setTimeout(() => resetButton(), 300);
          onSwipeComplete?.();
        },
      },
    ]);
  }, [amount, currency, onSwipeComplete, resetOnComplete, resetButton]);

  const panGesture = useMemo(() =>
    Gesture.Pan()
      .onStart(() => setIsAnimating(true))
      .onUpdate((e) => {
        const x = Math.max(0, Math.min(e.translationX, maxSwipeDistance));
        translateX.setValue(x);
      })
      .onEnd((e) => {
        if (e.translationX >= maxSwipeDistance * 0.8) {
          Animated.timing(translateX, { toValue: maxSwipeDistance, duration: 300, useNativeDriver: true }).start(() => {
            setIsCompleted(true);
            handlePaymentSuccess();
          });
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            tension: 120,
            friction: 8,
            useNativeDriver: true,
          }).start(() => setIsAnimating(false));
        }
      })
      .activeOffsetX(10)
      .failOffsetY([-5, 5])
      .enabled(!disabled && !isCompleted),
    [disabled, isCompleted, maxSwipeDistance, translateX, handlePaymentSuccess]
  );

  const animations = useMemo(() => ({
    progressScaleX: translateX.interpolate({
      inputRange: [0, maxSwipeDistance],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    thumbTranslateX: translateX.interpolate({
      inputRange: [0, maxSwipeDistance],
      outputRange: [0, maxSwipeDistance],
      extrapolate: 'clamp',
    }),
    textOpacity: translateX.interpolate({
      inputRange: [0, maxSwipeDistance * 0.5],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
    checkmarkOpacity: translateX.interpolate({
      inputRange: [maxSwipeDistance * 0.7, maxSwipeDistance],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    arrowOpacity: arrowAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
      extrapolate: 'clamp',
    }),
    arrowTranslateX: arrowAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50],
      extrapolate: 'clamp',
    }),
    // moving gradient direction effect
    movingGradientTranslateX: gradientAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [-buttonWidth * 0.5, buttonWidth * 1.2],
      extrapolate: 'clamp',
    }),
    movingGradientOpacity: gradientAnim.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, 0.7, 1, 0.7, 0],
      extrapolate: 'clamp',
    }),
  }), [translateX, maxSwipeDistance, arrowAnimation, gradientAnim, buttonWidth]);

  const gradientColors = useMemo(() => {
    if (disabled) return ['rgb(200, 200, 200)', 'rgb(180, 180, 180)'];
    if (isCompleted) return ['rgb(191, 255, 205)', 'rgb(125, 255, 150)'];
    return ['rgb(255, 246, 191)', 'rgb(255, 236, 125)'];
  }, [disabled, isCompleted]);

  const buttonText = useMemo(
    () => (amount ? `SWIPE TO PAY ${amount} ${currency}` : 'Send Currency'),
    [amount, currency]
  );

  return (
    <View style={[{ width: '100%', alignSelf: 'center' }, style]}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, disabled && styles.disabledContainer]}>
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.background}
          >
            {/* Moving gradient overlay for swipe direction */}
            {/* Primary bright layer */}
            <Animated.View
              style={[
                styles.movingGradient,
                {
                  opacity: animations.movingGradientOpacity,
                  transform: [{ translateX: animations.movingGradientTranslateX }],
                },
              ]}
            >
              <LinearGradient
                colors={[
                  'rgba(255,255,255,0)',
                  'rgba(255,255,255,0.9)',
                  'rgba(255,255,255,0.7)',
                  'rgba(255,255,255,0.3)',
                  'rgba(255,255,255,0)',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.movingGradientFill}
              />
            </Animated.View>

            {/* Secondary soft trailing glow */}
            <Animated.View
              style={[
                styles.movingGradient,
                {
                  opacity: animations.movingGradientOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.4],
                  }),
                  transform: [
                    { translateX: animations.movingGradientTranslateX },
                    { translateY: 4 },
                  ],
                },
              ]}
            >
              <LinearGradient
                colors={[
                  'rgba(255,255,255,0)',
                  'rgba(255,255,255,0.4)',
                  'rgba(255,255,255,0)',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.movingGradientFill}
              />
            </Animated.View>

            {/* Progress indicator */}
            <Animated.View
              style={[
                styles.progress,
                { transform: [{ scaleX: animations.progressScaleX }] },
              ]}
            />

            {/* Text */}
            <Animated.View style={[styles.textContainer, { opacity: animations.textOpacity }]}>
              <Animated.Text style={styles.buttonText}>{buttonText}</Animated.Text>
              <Animated.View
                style={[
                  styles.arrowContainer,
                  {
                    opacity: animations.arrowOpacity,
                    transform: [{ translateX: animations.arrowTranslateX }],
                  },
                ]}
              >
                <CustomIcon name="arrowRightIcon" size={10} color="#242121" />
              </Animated.View>
            </Animated.View>

            {/* Success Checkmark */}
            <Animated.View
              style={[
                styles.checkmarkContainer,
                { opacity: animations.checkmarkOpacity },
              ]}
            >
              <View style={styles.checkmark}>
                <Text style={styles.checkmarkText}>✓</Text>
              </View>
            </Animated.View>
          </LinearGradient>
        </Animated.View>
      </GestureDetector>
      <StyledText style={styles.swipeDescription}>Swipe Right to Send Currency</StyledText>
    </View>
  );
});

const styles = {
  container: {
    height: 60,
    borderRadius: 30,
  } as ViewStyle,
  disabledContainer: {
    shadowOpacity: 0.1,
    elevation: 1,
  } as ViewStyle,
  background: {
    flex: 1,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
  } as ViewStyle,
  progress: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
  } as ViewStyle,
  movingGradient: {
    position: 'absolute',
    top: '-15%',
    bottom: '-15%',
    left: '-10%',
    right: '-10%',
    overflow: 'hidden',
    opacity: 0.8,
    shadowColor: '#ffffff',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  } as ViewStyle,
  movingGradientFill: {
    width: '100%',
    height: '130%',
    transform: [{ rotate: '10deg' }],
  } as ViewStyle,
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  } as ViewStyle,
  buttonText: {
    color: '#003233',
    fontSize: 18,
    fontWeight: '900' as TextStyle['fontWeight'],
    fontFamily: 'Satoshi',
    marginRight: 8,
  } as TextStyle,
  arrowContainer: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  checkmarkContainer: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  checkmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#003233',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  checkmarkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900' as TextStyle['fontWeight'],
    fontFamily: 'Satoshi',
  } as TextStyle,
  swipeDescription: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500' as TextStyle['fontWeight'],
    fontFamily: 'Obviously',
    marginTop: 4,
    alignSelf: 'center',
  } as TextStyle,
};

SwipeToPayButton.displayName = 'SwipeToPayButton';
export default SwipeToPayButton;
