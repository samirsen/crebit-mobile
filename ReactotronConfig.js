import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'React Native Demo',
  })
  .useReactNative()
  .use(reactotronRedux()) // 👈 Add this line for Redux
  .connect();

// Optional: Clear Reactotron on app start
Reactotron.clear?.();

// Make Reactotron globally accessible
console.tron = Reactotron;

export default Reactotron;
