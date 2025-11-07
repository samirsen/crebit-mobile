import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { StyledText } from '../StyledText';
import CustomIcon from '../CustomIcon/CustomIcon';
import { colors } from '../../constants/colors';
import { CurrencyInputProps } from './CurrencyInput.types';
import { styles } from './CurrencyInput.styles';
import { useCurrencyInputController } from './CurrencyInput.controller';

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
  const { handleAmountChange, getShowPrefix } = useCurrencyInputController(isEditable, onAmountChange);
  const showPrefix = getShowPrefix(label);

  return (
    <View style={[styles.container, style]}>
      {/* Header */}
      <View style={styles.header}>
        <StyledText style={styles.label}>{label}</StyledText>
        <TouchableOpacity 
          style={styles.currencySelector}
          onPress={onCurrencyPress}
          activeOpacity={0.7}
        >
          <StyledText style={styles.currencyFlag}>{currency.flag}</StyledText>
          <StyledText style={styles.currencyCode}>{currency.code}</StyledText>
          <CustomIcon name="chevronDown" size={8} color={colors.text.dark} />
        </TouchableOpacity>
      </View>

      {/* Amount area */}
      <View style={styles.amountContainer}>
        {isEditable ? (
          <View style={styles.amountRow}>
            {showPrefix && <StyledText style={styles.amountPrefix}>R$</StyledText>}
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={handleAmountChange}
              keyboardType="numeric"
              placeholder={placeholder}
              placeholderTextColor="#999"
            />
          </View>
        ) : (
          <View style={styles.amountRow}>
            <StyledText style={styles.amountText}>{amount}</StyledText>
          </View>
        )}
      </View>
    </View>
  );
});

CurrencyInput.displayName = 'CurrencyInput';

