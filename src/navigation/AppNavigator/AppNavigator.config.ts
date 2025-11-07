import {fonts} from '../../constants';
import {colors} from '../../constants/colors';

export const APP_NAVIGATOR_CONFIG = {
  statusBar: {
    barStyle: 'light-content' as const,
    backgroundColor: colors.background,
    translucent: false,
  },
  navigationContainer: {
    theme: {
      dark: false,
      colors: {
        primary: colors.primary,
        background: colors.background,
        card: colors.surface,
        text: colors.text.primary,
        border: colors.border,
        notification: colors.warning,
      },
      fonts: {
        regular: {
          fontFamily: fonts.satoshi.regular,
        },
        medium: {
          fontFamily: fonts.satoshi.medium,
        },
        bold: {
          fontFamily: fonts.satoshi.blackItalic,
        },
      },
    },
  },
} as const;
