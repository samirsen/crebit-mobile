import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ProfileProps {
  size?: number;
  style?: any;
}

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

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    overflow: 'hidden',
    opacity: 1,
  },
  image: {
    borderRadius: 999,
  },
});

