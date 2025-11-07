import React, {useCallback} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './Landing.styles';
import {StyledText} from '../../components/StyledText';
import FrogHopWorld from '../../components/FrogHopWorld/FrogHopWorld';
import {CustomButton} from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export const Landing = React.memo(() => {
  const navigation = useNavigation();

  const handleRegister = useCallback(
    () => (navigation as any).navigate('SignUpFlow'),
    [navigation],
  );
  const handleLogin = useCallback(
    () => (navigation as any).navigate('LoginFlow'),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.title}>Crebit</StyledText>

      <View style={styles.gifContainer}>
        <FrogHopWorld />
      </View>

      <View style={styles.titleContainer}>
        <StyledText style={styles.titleDesc}>
          Welcome to the{' '}
          <Text style={{color: '#205253'}}>Fastest & Cheapest </Text>
          Foreign Exchange
        </StyledText>
        <StyledText style={styles.desc}>
          Hop into Savings, Please sign in to {'\n'}continue
        </StyledText>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton
          text="Log In"
          onPress={handleLogin}
          gradientColors={['#054546', '#076E70']}
          textColor="#FFFFFF"
          borderColor="#003233"
          borderWidth={1}
          height={56}
          borderRadius={4}
          fontSize={14}
          fontWeight="500"
          withShadow
        />
        <CustomButton
          text="Register"
          onPress={handleRegister}
          textColor="#003233"
          backgroundColor="#ffffff"
          borderColor="#003233"
          borderWidth={0.38}
          height={56}
          borderRadius={4}
          fontSize={14}
          fontWeight="500"
          withShadow
        />
      </View>
      <View style={styles.guestContainer}>
        <StyledText style={styles.guest}>Continue as a </StyledText>
        <StyledText style={[styles.guest, styles.guestUnderline]}>
          Guest
        </StyledText>
      </View>
    </SafeAreaView>
  );
});
