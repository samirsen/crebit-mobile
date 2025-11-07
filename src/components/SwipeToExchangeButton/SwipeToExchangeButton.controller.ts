import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Animated, Dimensions, Alert } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import { SwipeToPayButtonState, ButtonDimensions } from './SwipeToExchangeButton.types';

const { width: screenWidth } = Dimensions.get('window');

export const useSwipeToPayButtonController = (
  onSwipeComplete?: () => void,
  disabled?: boolean,
  resetOnComplete?: boolean
) => {
  // Animation refs
  const translateX = useRef(new Animated.Value(0)).current;
  const textGlow = useRef(new Animated.Value(0)).current;
  const textPulse = useRef(new Animated.Value(0)).current;
  const shimmer1Position = useRef(new Animated.Value(0)).current;
  const shimmer2Position = useRef(new Animated.Value(0)).current;
  const shimmer3Position = useRef(new Animated.Value(0)).current;
  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const gradientAnim = useRef(new Animated.Value(0)).current;

  // State
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Button dimensions
  const buttonDimensions = useMemo((): ButtonDimensions => ({
    buttonWidth: screenWidth * 0.8,
    thumbSize: 60,
    get maxSwipeDistance() {
      return this.buttonWidth - this.thumbSize - 16;
    },
  }), []);

  const { buttonWidth, maxSwipeDistance } = buttonDimensions;

  // Reset function
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

  // Complete swipe function
  const completeSwipe = useCallback(() => {
    setIsCompleted(true);
    setIsAnimating(false);
    
    Animated.timing(translateX, {
      toValue: maxSwipeDistance,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      onSwipeComplete?.();
      
      if (resetOnComplete) {
        setTimeout(() => {
          resetButton();
        }, 1500);
      }
    });
  }, [translateX, maxSwipeDistance, onSwipeComplete, resetOnComplete, resetButton]);

  // Gesture handler
  const panGesture = useMemo(() => {
    if (disabled || isCompleted) return Gesture.Pan();

    return Gesture.Pan()
      .onStart(() => {
        setIsAnimating(true);
      })
      .onUpdate((event) => {
        const clampedX = Math.max(0, Math.min(event.translationX, maxSwipeDistance));
        translateX.setValue(clampedX);
      })
      .onEnd((event) => {
        const threshold = maxSwipeDistance * 0.8;
        
        if (event.translationX >= threshold) {
          completeSwipe();
        } else {
          setIsAnimating(false);
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 8,
          }).start();
        }
      });
  }, [disabled, isCompleted, maxSwipeDistance, translateX, completeSwipe]);

  // Text glow and pulse animation
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

  // Shimmer animation
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

  // Gradient animation
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
  }, [isCompleted, disabled, isAnimating, gradientAnim]);

  return {
    // State
    isCompleted,
    isAnimating,
    
    // Dimensions
    buttonDimensions,
    
    // Animation values
    translateX,
    textGlow,
    textPulse,
    shimmer1Position,
    shimmer2Position,
    shimmer3Position,
    arrowAnimation,
    gradientAnim,
    
    // Functions
    resetButton,
    panGesture,
  };
};
