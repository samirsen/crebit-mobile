import {StyledText} from '../../components/StyledText';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './Landing.styles';
import FrogHopWorld from '../../components/FrogHopWorld/FrogHopWorld';
import {CustomButton} from '../../components/CustomButton';
import {spacing} from '../../constants/spacing';

export const Landing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.title}>Crebit</StyledText>
      <FrogHopWorld />

      <View style={styles.titleContainer}>
        <StyledText style={styles.titleDesc}>
          Welcome to the{' '}
          <Text style={{color: '#205253'}}>Fastest & Cheapest </Text>
          Foreign Exchange
        </StyledText>
        <StyledText style={styles.desc}>
          Hop into Savings, Please sign in to continue
        </StyledText>
      </View>

      <View style={{gap: spacing.sm, width: '100%', padding: spacing.md}}>
        <CustomButton
          text="Log In"
          onPress={() => console.log('Login pressed')}
          gradientColors={['#054546', '#076E70']}
          textColor="#FFFFFF"
          borderColor="#003233"
          borderWidth={1}
          height={46}
          borderRadius={4}
          fontSize={14}
          fontWeight={'500'}
          withShadow
        />

        {/* Register Button */}
        <CustomButton
          text="Register"
          onPress={() => console.log('Register pressed')}
          textColor="#003233"
          backgroundColor="#ffffff"
          borderColor="#003233"
          borderWidth={0.38}
          height={46}
          borderRadius={4}
          fontSize={14}
          fontWeight={'500'}
          withShadow
        />
      </View>

      <StyledText style={styles.guest}>Continue as a Guest</StyledText>
    </SafeAreaView>
  );
};
