import React, { useRef, useState, useEffect } from 'react';
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

export interface SwipeToExchangeButtonProps {
  onSwipeComplete?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export const SwipeToExchangeButton: React.FC<SwipeToExchangeButtonProps> = ({
  onSwipeComplete,
  disabled = false,
  style,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const buttonWidth = screenWidth * 0.8; // 80% of screen width
  const thumbSize = 60;
  const maxSwipeDistance = buttonWidth - thumbSize - 16; // 16px padding
  
  // Auto-animation to guide user
  useEffect(() => {
    if (!isCompleted && !isAnimating) {
      const startGuideAnimation = () => {
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: maxSwipeDistance * 0.3,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(translateX, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setTimeout(startGuideAnimation, 2000);
        });
      };
      
      const timer = setTimeout(startGuideAnimation, 1000);
      return () => clearTimeout(timer);
    }
  }, [isCompleted, isAnimating, translateX, maxSwipeDistance]);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      setIsAnimating(true);
    })
    .onUpdate((event) => {
      // Clamp the translation to prevent over-swiping
      const clampedTranslation = Math.max(0, Math.min(event.translationX, maxSwipeDistance));
      translateX.setValue(clampedTranslation);
    })
    .onEnd((event) => {
      const { translationX } = event;
      
      if (translationX >= maxSwipeDistance * 0.8) {
        // Complete the swipe
        Animated.timing(translateX, {
          toValue: maxSwipeDistance,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Show success alert
          Alert.alert(
            'Transfer Initiated',
            'Your currency exchange has been successfully initiated!',
            [
              {
                text: 'OK',
                onPress: () => {
                  // Reset button state after alert
                  setTimeout(() => {
                    setIsCompleted(false);
                    translateX.setValue(0);
                    setIsAnimating(false);
                  }, 100);
                }
              }
            ]
          );
          
          onSwipeComplete?.();
        });
      } else {
        // Reset to initial position with smooth animation
        Animated.spring(translateX, {
          toValue: 0,
          tension: 120,
          friction: 8,
          useNativeDriver: true,
        }).start(() => {
          setIsAnimating(false);
        });
      }
    })
    .activeOffsetX(10)
    .failOffsetY([-5, 5])
    .enabled(!disabled);

  const progressScaleX = translateX.interpolate({
    inputRange: [0, maxSwipeDistance],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const thumbTranslateX = translateX.interpolate({
    inputRange: [0, maxSwipeDistance],
    outputRange: [0, maxSwipeDistance],
    extrapolate: 'clamp',
  });

  const textOpacity = translateX.interpolate({
    inputRange: [0, maxSwipeDistance * 0.5],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const checkmarkOpacity = translateX.interpolate({
    inputRange: [maxSwipeDistance * 0.7, maxSwipeDistance],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={[{ width: buttonWidth, alignSelf: 'center' }, style]}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={styles.container}>
          {/* Background with gradient */}
          <LinearGradient
            colors={['rgb(255, 246, 191)', 'rgb(255, 236, 125)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.background}
          >
            {/* Progress indicator */}
            <Animated.View
              style={[
                styles.progress,
                {
                  transform: [{ scaleX: progressScaleX }],
                },
              ]}
            />
            
            {/* Text content */}
            <Animated.View
              style={[
                styles.textContainer,
                { opacity: textOpacity },
              ]}
            >
              <StyledText style={styles.buttonText}>
                SWIPE TO CONVERT CURRENCY
              </StyledText>
              <View style={styles.arrowContainer}>
                <CustomIcon name="arrowRightIcon" size={16} color="#003233" />
              </View>
            </Animated.View>

            {/* Success checkmark */}
            <Animated.View
              style={[
                styles.checkmarkContainer,
                { opacity: checkmarkOpacity },
              ]}
            >
              <CustomIcon name="phoneCall" size={20} color="#003233" />
            </Animated.View>
          </LinearGradient>

          {/* Thumb */}
          <Animated.View
            style={[
              styles.thumb,
              {
                transform: [{ translateX: thumbTranslateX }],
              },
            ]}
          >
            <LinearGradient
              colors={['#FFFFFF', '#F5F5F5']}
              style={styles.thumbGradient}
            >
              <CustomIcon name="arrowRightIcon" size={20} color="#003233" />
            </LinearGradient>
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = {
  container: {
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  } as ViewStyle,
  
  background: {
    flex: 1,
    borderRadius: 30,
    position: 'relative',
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
  
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  } as ViewStyle,
  
  buttonText: {
    color: '#003233',
    fontSize: 16,
    fontWeight: '900' as TextStyle['fontWeight'],
    fontFamily: 'Satoshi',
    marginRight: 8,
  } as TextStyle,
  
  arrowContainer: {
    marginLeft: 4,
  } as ViewStyle,
  
  checkmarkContainer: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  
  thumb: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 44,
    height: 44,
    borderRadius: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  
  thumbGradient: {
    flex: 1,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 50, 51, 0.1)',
  } as ViewStyle,
};

SwipeToExchangeButton.displayName = 'SwipeToExchangeButton';

export default SwipeToExchangeButton;