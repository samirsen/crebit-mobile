import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { StyledText } from '../StyledText';
import CustomIcon from '../CustomIcon/CustomIcon';

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export interface CountrySelectModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: CountryOption) => void;
  countries: CountryOption[];
  selectedCountry?: CountryOption;
  title?: string;
}

export const CountrySelectModal: React.FC<CountrySelectModalProps> = React.memo(({
  visible,
  onClose,
  onSelect,
  countries,
  selectedCountry,
  title = 'Select Country',
}) => {
  const handleCountryPress = (country: CountryOption) => {
    onSelect(country);
    onClose();
  };

  const renderCountryItem = ({ item }: { item: CountryOption }) => {
    const isSelected = selectedCountry?.code === item.code;

    return (
      <TouchableOpacity
        style={[
          styles.countryOption,
          isSelected && styles.selectedCountryOption
        ]}
        onPress={() => handleCountryPress(item)}
        activeOpacity={0.7}
      >
        <StyledText style={styles.countryText}>
          {item.flag} {item.name}
        </StyledText>
        {isSelected && (
          <CustomIcon name="arrowUp" size={20} color="#003233" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <StyledText style={styles.modalTitle}>{title}</StyledText>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <StyledText style={styles.closeText}>✕</StyledText>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={countries}
            keyExtractor={(item) => item.code}
            renderItem={renderCountryItem}
            showsVerticalScrollIndicator={false}
            style={styles.countryList}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
});

CountrySelectModal.displayName = 'CountrySelectModal';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '80%',
    minHeight: 250,
    maxHeight: 500,
  },
  
  modalHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: '#003233',
  },
  
  closeButton: {
    padding: 4,
  },
  
  closeText: {
    fontSize: 18,
    color: '#003233',
    fontWeight: '600',
  },
  
  countryList: {
    minHeight: 250,
  },
  
  countryOption: {
    marginTop: 8,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#eaeaeaff',
  },
  
  selectedCountryOption: {
    backgroundColor: '#efefefff',
    borderWidth: 1,
    borderColor: '#003233',
  },
  
  countryText: {
    fontSize: 16,
    color: '#003233',
    fontWeight: '500' as const,
    //align text center
    textAlign: 'center',
    
  },
});

export default CountrySelectModal;

