import { TextProps } from 'react-native';

export interface StyledTextProps extends TextProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';
  fontSize?: number;
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  lineHeight?: number;
  letterSpacing?: number;
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  style?: any;
}
