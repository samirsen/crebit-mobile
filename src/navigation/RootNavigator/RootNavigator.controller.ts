import {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';

export const useRootNavigatorController = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        Alert.alert('Exit App', 'Do you really want to exit?', [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Exit', onPress: () => BackHandler.exitApp()},
        ]);
        return true; // prevent default behavior
      },
    );

    // Cleanup function
    return () => backHandler.remove();
  }, []);
};
