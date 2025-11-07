import React, { useMemo, useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useHomeController } from './Home.controller';
import { styles } from './Home.styles';
import { colors } from '../../constants/colors';
import type { HomeProps } from './Home.types';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import { StyledText } from '../../components/StyledText';
import { CountrySelectModal, CountryOption } from '../../components/CountrySelectModal';
import { CurrencyInput } from '../../components/CurrencyInput';
import { SwapButton } from '../../components/SwapButton';
import { ServiceComparisonCard } from '../../components/ServiceComparisonCard';
import { InfoCard } from '../../components/InfoCard';
import SwipeToPayButton from '../../components/SwipeToExchangeButton/SwipeToExchangeButton';

export const HomeScreen: React.FC<HomeProps> = React.memo(() => {
  const {
    user,
    homeState,
    handleSectionChange,
    handleSwapCurrencies,
    handleSendAmountChange,
    handleExchangeInitiation,
  } = useHomeController();

  // Country selection modal state
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [selectedCurrencyType, setSelectedCurrencyType] = useState<'from' | 'to'>('from');

  // Available countries
  const countries: CountryOption[] = [
    { code: 'BRL', name: 'Brazil', flag: '🇧🇷' },
    { code: 'USD', name: 'United States', flag: '🇺🇸' },
    { code: 'MXN', name: 'Mexico', flag: '🇲🇽' },
  ];

  const handleCurrencyPress = (type: 'from' | 'to') => {
    setSelectedCurrencyType(type);
    setIsCountryModalVisible(true);
  };

  const handleCountrySelect = (country: CountryOption) => {
    // TODO: Update the exchange rate based on selected country
    console.log('Selected country:', country, 'for', selectedCurrencyType);
    setIsCountryModalVisible(false);
  };

  // Memoize button props to prevent unnecessary re-renders
  const crebitButtonProps = useMemo(() => ({
    text: "Crebit",
    onPress: () => handleSectionChange('crebit'),
    width: 150,
    height: 52,
    fontSize: 14,
    borderRadius: 12,
    fontWeight: 400 as const,
    textColor: homeState.activeSection === 'crebit' ? '#FFEC7D' : '#FFFFFF',
    gradientColors: homeState.activeSection === 'crebit' ? 
      ['rgba(191, 170, 45, 0.25)', 'rgba(153, 153, 153, 0.25)'] : 
      ['#063939ff', '#0a3131ff'],
    backgroundColor: homeState.activeSection === 'crebit' ? 
      undefined : 
      '#12696B26',
    borderWidth: 0.25,
    borderColor: homeState.activeSection === 'crebit' ? 
      '#F1FFBF' : 
      '#12696B',
    padding: 8,
  }), [homeState.activeSection, handleSectionChange]);

  const compareButtonProps = useMemo(() => ({
    text: "Compare",
    onPress: () => handleSectionChange('compare'),
    width: 150,
    height: 52,
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 400 as const,
    textColor: homeState.activeSection === 'compare' ? '#FFEC7D' : '#FFFFFF',
    gradientColors: homeState.activeSection === 'compare' ? 
      ['rgba(191, 170, 45, 0.25)', 'rgba(153, 153, 153, 0.25)'] : 
      ['#063939ff', '#0a3131ff'],
    backgroundColor: homeState.activeSection === 'compare' ? 
      undefined : 
      '#12696B26',
    borderWidth: 0.25,
    borderColor: homeState.activeSection === 'compare' ? 
     '#F1FFBF' : 
      '#12696B',
    padding: 8,
  }), [homeState.activeSection, handleSectionChange]);

  const renderCrebitSection = useMemo(() => (
    <View style={styles.crebitContainer}>
      {/* Currency Input - You Send */}
      <CurrencyInput
        label="YOU SEND"
        amount={`${homeState.sendAmount}`}
        currency={homeState.exchangeRate.from}
        isEditable={true}
        onAmountChange={handleSendAmountChange}
        onCurrencyPress={() => handleCurrencyPress('from')}
        placeholder="0.00"
      />

      {/* Swap Button */}
      <SwapButton onPress={handleSwapCurrencies} />

      {/* Currency Input - You Receive */}
      <CurrencyInput
        label="YOU RECEIVE"
        amount={`$ ${homeState.receiveAmount}`}
        currency={homeState.exchangeRate.to}
        isEditable={false}
        onCurrencyPress={() => handleCurrencyPress('to')}
      />
      <View style={styles.divider} />

      {/* Total Fees */}
      <InfoCard
        title="Total Fees"
        content="$0"
        style={styles.feesContainer}
      />

      {/* Transfer Info */}
      <InfoCard
        title="1 hour on Business Days (Mon-Fri)"
        content="Weekend or Holiday Transfers arrive next Business Day"
        style={styles.transferInfo}
      />
            {/* Swipe to Exchange Button */}
      <View style={styles.swipeButtonContainer}>
        <SwipeToPayButton
        resetOnComplete

          onSwipeComplete={handleExchangeInitiation}
          disabled={!homeState.sendAmount || parseFloat(homeState.sendAmount) <= 0}
        />
      </View>

      {/* Disclaimer */}
      <View style={styles.disclaimer}>
        <StyledText style={styles.disclaimerText}>
          Fully compliant with KYC regulations.{'\n'}
          Registered under financial law with licensed partners abroad.
        </StyledText>
      </View>


    </View>
  ), [homeState.exchangeRate, homeState.sendAmount, homeState.receiveAmount, handleSwapCurrencies, handleSendAmountChange, handleCurrencyPress, handleExchangeInitiation]);

  const renderCompareSection = useMemo(() => (
    <View style={styles.comparisonContainer}>
      {/* Currency Input - You Send */}
      <CurrencyInput
        label="YOU SEND"
        amount={`${homeState.sendAmount}`}
        currency={homeState.exchangeRate.from}
        isEditable={true}
        onAmountChange={handleSendAmountChange}
        onCurrencyPress={() => handleCurrencyPress('from')}
        placeholder="0.00"
      />

      {/* Swap Button */}
      <SwapButton onPress={handleSwapCurrencies} />

      {/* Currency Input - You Receive */}
      <CurrencyInput
        label="YOU RECEIVE"
        amount={`$ ${homeState.receiveAmount}`}
        currency={homeState.exchangeRate.to}
        isEditable={false}
        onCurrencyPress={() => handleCurrencyPress('to')}
      />
      <View style={styles.divider} />

      {/* Service Comparison Cards */}
      <ServiceComparisonCard
        serviceName="Crebit"
        rate="5.404 = 1 USD"
        transferFee="Transfer Fee: $0"
        transferTime="1 hour Business Day"
        isHighlighted={true}
      />

      <ServiceComparisonCard
        serviceName="Wise"
        rate="5.689 = 1 USD"
        transferFee="Transfer Fee: $15"
        transferTime="1-3 Business Days"
      />

      <ServiceComparisonCard
        serviceName="Flywire"
        rate="5.883 = 1 USD"
        transferFee="Transfer Fee: $20-35"
        transferTime="2-5 Business Days"
      />

      {/* Swipe to Exchange Button */}
      <View style={styles.swipeButtonContainer}>
        <SwipeToPayButton
        resetOnComplete
          onSwipeComplete={handleExchangeInitiation}
          disabled={!homeState.sendAmount || parseFloat(homeState.sendAmount) <= 0}
        />
      </View>
    </View>
  ), [homeState.exchangeRate, homeState.sendAmount, homeState.receiveAmount, handleSwapCurrencies, handleSendAmountChange, handleCurrencyPress, handleExchangeInitiation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header theme="dark" showProfile showMenu />
      
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={Platform.OS === 'ios'}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          style={styles.liveRateCard}
          scrollEnabled
          shouldRasterizeIOS
          bounces={true}
          bouncesZoom={true}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          keyboardShouldPersistTaps="handled"
        >
        {/* Live Rate Card with Gradient Background */}
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.2)', 'rgba(3, 134, 132, 0.2)', 'rgba(0, 50, 51, 0.2)']}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.liveRateContent}
        >
       <View style={styles.liveRateHeader}>
  <StyledText style={styles.liveRateTitle}>Live Rate</StyledText>
  <TouchableOpacity style={{ position: 'absolute', right: -70 }} >
    <CustomIcon name="refresh" size={20} color="#4B7172" />
  </TouchableOpacity>
</View>


          {/* Section Toggle */}
          <View style={styles.sectionToggle}>
            <CustomButton {...crebitButtonProps} />
            <CustomButton {...compareButtonProps} />
          </View>

          {/* Exchange Rate Display */}
          <View style={styles.exchangeRate}>
            <StyledText style={styles.rateText}>
              {homeState.exchangeRate.rate.toFixed(4)} {homeState.exchangeRate.from.code} = 1 {homeState.exchangeRate.to.code}
            </StyledText>
          </View>

          {/* Dynamic Section Content */}
          {homeState.activeSection === 'crebit' ? renderCrebitSection : renderCompareSection}
        </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Country Selection Modal */}
      <CountrySelectModal
        visible={isCountryModalVisible}
        onClose={() => setIsCountryModalVisible(false)}
        onSelect={handleCountrySelect}
        countries={countries}
        title="Select Currency"
      />
    </SafeAreaView>
  );
});

HomeScreen.displayName = 'HomeScreen';
