import React from 'react';
import { View, Image } from 'react-native';
import { ProfileProps } from './Profile.types';
import { styles } from './Profile.styles';

export const Profile: React.FC<ProfileProps> = ({ size = 24, style }) => {
  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Image 
        source={require('../../../assets/images/profile.png')}
        style={[styles.image, { width: size, height: size }]}
        resizeMode="cover"
      />
    </View>
  );
};


