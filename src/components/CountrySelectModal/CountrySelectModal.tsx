import React from 'react';
import {Modal, View, TouchableOpacity, FlatList} from 'react-native';
import {StyledText} from '../StyledText';
import CustomIcon from '../CustomIcon/CustomIcon';
import {colors} from '../../constants/colors';
import {
  CountryOption,
  CountrySelectModalProps,
} from './CountrySelectModal.types';
import {styles} from './CountrySelectModal.styles';
import {useCountrySelectModalController} from './CountrySelectModal.controller';

export const CountrySelectModal: React.FC<CountrySelectModalProps> = React.memo(
  ({
    visible,
    onClose,
    onSelect,
    countries,
    selectedCountry,
    title = 'Select Country',
  }) => {
    const {handleCountryPress, renderSeparator} =
      useCountrySelectModalController(onSelect, onClose);

    const renderCountryItem = ({item}: {item: CountryOption}) => {
      const isSelected = selectedCountry?.code === item.code;

      return (
        <TouchableOpacity
          style={[
            styles.countryOption,
            isSelected && styles.selectedCountryOption,
          ]}
          onPress={() => handleCountryPress(item)}
          activeOpacity={0.7}>
          <StyledText style={styles.countryText}>
            {item.flag} {item.name}
          </StyledText>
          {isSelected && (
            <CustomIcon name="arrowUp" size={20} color={colors.secondary} />
          )}
        </TouchableOpacity>
      );
    };

    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={onClose}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <StyledText style={styles.modalTitle}>{title}</StyledText>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
                activeOpacity={0.7}>
                <StyledText style={styles.closeText}>✕</StyledText>
              </TouchableOpacity>
            </View>

            <FlatList
              data={countries}
              keyExtractor={item => item.code}
              renderItem={renderCountryItem}
              showsVerticalScrollIndicator={false}
              style={styles.countryList}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  },
);

CountrySelectModal.displayName = 'CountrySelectModal';

export default CountrySelectModal;
