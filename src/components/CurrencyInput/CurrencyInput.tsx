import React from 'react';
import { View, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import { StyledText } from '../StyledText';
import CustomIcon from '../CustomIcon/CustomIcon';

export interface CurrencyInputProps {
  label: string;
  amount: string;
  currency: {
    flag: string;
    code: string;
  };
  isEditable?: boolean;
  onAmountChange?: (amount: string) => void;
  onCurrencyPress?: () => void;
  placeholder?: string;
  style?: ViewStyle;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = React.memo(({
  label,
  amount,
  currency,
  isEditable = false,
  onAmountChange,
  onCurrencyPress,
  placeholder = "0.00",
  style,
}) => {
  const handleAmountChange = (text: string) => {
    if (isEditable && onAmountChange) {
      const numericValue = text.replace(/[^0-9.]/g, '');
      onAmountChange(numericValue);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <StyledText style={styles.label}>{label}</StyledText>
        <TouchableOpacity 
          style={styles.currencySelector}
          onPress={onCurrencyPress}
          activeOpacity={0.7}
        >
          <StyledText style={styles.currencyFlag}>{currency.flag}</StyledText>
          <StyledText style={styles.currencyCode}>{currency.code}</StyledText>
          <CustomIcon name="chevronDown" size={8} color="#111111" />
        </TouchableOpacity>
      </View>
      
      {isEditable ? (
        <TextInput
          style={styles.amountInput}
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
          placeholder={placeholder}
          placeholderTextColor="#999"
        />
      ) : (
        <StyledText style={styles.amountText}>{amount}</StyledText>
      )}
    </View>
  );
});

CurrencyInput.displayName = 'CurrencyInput';

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  } as ViewStyle,
  header: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    marginBottom: 8,
  },
  label: {
    color: '#545454',
    fontSize: 12,
    fontWeight: '700' as const,
    letterSpacing: 0.5,
  },
  currencySelector: {
    flexDirection: 'row' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    backgroundColor: '#f1f1f1ff',
    height: 30,
    width: 95,
    // paddingHorizontal: 12,
    // paddingVertical: 6,
    borderRadius: 30,
  },
  currencyFlag: {
    fontSize: 16,
    marginRight: 6,
  },
  currencyCode: {
    color: '#111111',
    fontSize: 12,
    fontWeight: '400' as const,
    marginRight: 6,
  },
  amountInput: {
    color: '#111111',
    fontSize: 24,
    fontWeight: '700' as const,
  },
  amountText: {
    color: '#111111',
    fontSize: 24,
    fontWeight: '700' as const,
  },
};
