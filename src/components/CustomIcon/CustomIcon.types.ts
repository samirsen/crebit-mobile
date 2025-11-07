import { IconProps } from 'react-native-vector-icons/Icon';

export interface CustomIconProps extends IconProps {
  name: string;
  size?: number;
  color?: string;
}
