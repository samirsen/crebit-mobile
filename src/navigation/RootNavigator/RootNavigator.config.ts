import { colors } from '../../constants/colors';

export const ROOT_NAVIGATOR_CONFIG = {
  statusBar: {
    barStyle: 'light-content' as const,
    backgroundColor: colors.background,
    translucent: false,
  },
  navigationContainer: {
    theme: {
      colors: {
        primary: colors.primary,
        background: colors.background,
        card: colors.surface,
        text: colors.text.primary,
        border: colors.border,
        notification: colors.warning,
      },
    },
  },
} as const;
