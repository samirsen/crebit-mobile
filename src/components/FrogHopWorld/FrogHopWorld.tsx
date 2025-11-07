import React from 'react';
import { View, Image} from 'react-native';
import {styles} from './FrogHopWorld.styles';
const FrogHopWorld = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/GIFs/frogHopWorld.gif')}
        style={styles.gif}
        resizeMode="contain"
        />
    </View>
  );
};

export default FrogHopWorld;
