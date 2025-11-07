import React, { useMemo } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useTransferController } from './Transfer.controller';
import { styles } from './Transfer.styles';
import type { TransferProps } from './Transfer.types';
import { Header } from '../../components/Header';
import { ConversionCard } from '../../components/ConversionCard';
import { CustomButton } from '../../components/CustomButton';
import { TransactionHistory } from '../../components/TransactionHistory';
import { StyledText } from '../../components/StyledText';

export const TransferScreen: React.FC<TransferProps> = React.memo(() => {
  const {
    transferState,
    handleScheduleCall,
    handleViewReceipt,
  } = useTransferController();

  // Memoize the schedule call button props
  const scheduleCallButtonProps = useMemo(() => ({
    text: "Schedule a Call",
    onPress: handleScheduleCall,
    leftIcon: "phoneCall",
    width: 357,
    height: 48,
    borderRadius: 4,
    fontSize: 14,
    fontWeight: '500' as const,
    textColor: '#FFFFFF',
    gradientColors: ['#054546', '#076E70'],
    borderWidth: 1,
    borderColor: '#003233',
    padding: 18,
  }), [handleScheduleCall]);

  return (
    <SafeAreaView style={styles.container}>
      <Header theme="light" showProfile showMenu />
      
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        scrollEventThrottle={16}
        bounces={true}
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Conversion Cards Section */}
        <View style={styles.conversionSection}>
          <ConversionCard
            title="Conversions this Month"
            amount={`$ ${transferState.monthlyConversions} USD`}
          />
          <ConversionCard
            title="Lifetime Conversions"
            amount={`$ ${transferState.lifetimeConversions} USD`}
          />
        </View>

        {/* Support Section */}
        <View style={styles.supportSection}>
          <StyledText style={styles.supportText}>
            Have any concerns?
          </StyledText>
          <CustomButton {...scheduleCallButtonProps} />
        </View>

        {/* Transaction History Section */}
        <View style={styles.transactionHistorySection}>
          <TransactionHistory
            transactions={transferState.transactions}
            onViewReceipt={handleViewReceipt}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

TransferScreen.displayName = 'TransferScreen';


