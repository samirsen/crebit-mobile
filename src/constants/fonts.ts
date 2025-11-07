// export const fonts = {
//   // Satoshi font family
//   satoshi: {
//     regular: 'Satoshi-Regular',
//     medium: 'Satoshi-Medium',
//     bold: 'Satoshi-Bold',
//     black: 'Satoshi-Black',
//     light: 'Satoshi-Light',
//     italic: 'Satoshi-Italic',
//     mediumItalic: 'Satoshi-MediumItalic',
//     boldItalic: 'Satoshi-BoldItalic',
//     blackItalic: 'Satoshi-BlackItalic',
//     lightItalic: 'Satoshi-LightItalic',
//     variable: 'Satoshi-Variable',
//     variableItalic: 'Satoshi-VariableItalic',
//   },

//   // Obviously font family
//   obviously: {
//     regular: 'fonnts.com-Obviously',
//     thin: 'fonnts.com-Obviously_Thin',
//     light: 'fonnts.com-Obviously_Lght',
//     medium: 'fonnts.com-Obviously_Medi',
//     semiBold: 'fonnts.com-Obviously_Semi',
//     bold: 'fonnts.com-Obviously_Bold',
//     black: 'fonnts.com-Obviously_Blck',
//     italic: 'fonnts.com-Obviously_Italic',
//     thinItalic: 'fonnts.com-Obviously_Thin_Italic',
//     lightItalic: 'fonnts.com-Obviously_Lght_Italic',
//     mediumItalic: 'fonnts.com-Obviously_Medi_Italic',
//     semiBoldItalic: 'fonnts.com-Obviously_Semi_Italic',
//     boldItalic: 'fonnts.com-Obviously_Bold_Italic',
//     blackItalic: 'fonnts.com-Obviously_Blck_Italic',
//     // Extended variants
//     extended: 'fonnts.com-Obviously_Extd',
//     extendedThin: 'fonnts.com-Obviously_Extd_Thin',
//     extendedLight: 'fonnts.com-Obviously_Extd_Lght',
//     extendedMedium: 'fonnts.com-Obviously_Extd_Medi',
//     extendedSemiBold: 'fonnts.com-Obviously_Extd_Semi',
//     extendedBold: 'fonnts.com-Obviously_Extd_Bold_Bold',
//     extendedBlack: 'fonnts.com-Obviously_Extd_Blck',
//     extendedSuper: 'fonnts.com-Obviously_Extd_Supr',
//     extendedItalic: 'fonnts.com-Obviously_Extd_Italic',
//     extendedThinItalic: 'fonnts.com-Obviously_Extd_Thin_Italic',
//     extendedLightItalic: 'fonnts.com-Obviously_Extd_Lght_Italic',
//     extendedMediumItalic: 'fonnts.com-Obviously_Extd_Medi_Italic',
//     extendedSemiBoldItalic: 'fonnts.com-Obviously_Extd_Semi_Italic',
//     extendedBoldItalic: 'fonnts.com-Obviously_Extd_Bold_Bold_Italic',
//     extendedBlackItalic: 'fonnts.com-Obviously_Extd_Blck_Italic',
//   },

//   // Inter font family
//   inter: {
//     thin: 'Inter-Thin',
//     extraLight: 'Inter-ExtraLight',
//     light: 'Inter-Light',
//     regular: 'Inter-Regular',
//     medium: 'Inter-Medium',
//     semiBold: 'Inter-SemiBold',
//     bold: 'Inter-Bold',
//     extraBold: 'Inter-ExtraBold',
//     black: 'Inter-Black',
//   },

//   // Icon font
//   icomoon: 'icomoon',

//   // Default font stacks for different use cases
//   primary: 'Satoshi-Regular', // Main app font
//   secondary: 'Inter-Regular', // Secondary text font
//   heading: 'Obviously-Bold', // For headings
//   display: 'Obviously-Black', // For large display text
// } as const;

// // Font sizes
// export const fontSizes = {
//   xs: 10,
//   sm: 12,
//   base: 14,
//   md: 16,
//   lg: 18,
//   xl: 20,
//   '2xl': 24,
//   '3xl': 28,
//   '4xl': 32,
//   '5xl': 36,
//   '6xl': 48,
// } as const;

// // Font weights (for fonts that support variable weights)
// export const fontWeights = {
//   thin: '100',
//   extraLight: '200',
//   light: '300',
//   normal: '400',
//   medium: '500',
//   semiBold: '600',
//   bold: '700',
//   extraBold: '800',
//   black: '900',
// } as const;

//"Obviously-Semi
// SatoshiVariable-Bold
//SatoshiVariable-Bold_Regular
// SatoshiVariable-Bold_Bold
// SatoshiVariable

// 'Inter-Black',
//  'Inter-ExtraBold',
//  'Inter-ExtraLight',
//  'Inter-Light',
//  'Inter-Medium',
// 'Inter-Regular',
//  'Inter-SemiBold',
// 'Inter-Thin',

export const fonts = {
  // Satoshi Variable family
  satoshi: {
    regular: 'SatoshiVariable', // base variable
    medium: 'SatoshiVariable-Bold_Regular', // assuming this is mid-weight
    bold: 'SatoshiVariable-Bold', // main bold
    black: 'SatoshiVariable-Bold_Bold', // strongest variant
    light: 'SatoshiVariable', // using variable default as fallback
    italic: 'SatoshiVariable-Bold_Regular', // variable italic not listed, fallback
    mediumItalic: 'SatoshiVariable-Bold', // fallback
    boldItalic: 'SatoshiVariable-Bold_Bold', // fallback
    blackItalic: 'SatoshiVariable-Bold_Bold', // fallback
    lightItalic: 'SatoshiVariable', // fallback
    variable: 'SatoshiVariable',
    variableItalic: 'SatoshiVariable-Bold_Regular',
  },

  // Obviously family
  obviously: {
    regular: 'Obviously-Semi', // no plain “Regular” in your list, using semi as base
    thin: 'Obviously-Semi', // fallback
    light: 'Obviously-Semi', // fallback
    medium: 'Obviously-Semi', // fallback
    semiBold: 'Obviously-Semi',
    bold: 'Obviously-Semi', // fallback, since only one variant listed
    black: 'Obviously-Semi', // fallback
    italic: 'Obviously-Semi', // fallback
    thinItalic: 'Obviously-Semi',
    lightItalic: 'Obviously-Semi',
    mediumItalic: 'Obviously-Semi',
    semiBoldItalic: 'Obviously-Semi',
    boldItalic: 'Obviously-Semi',
    blackItalic: 'Obviously-Semi',

    // Extended / extra variants
    extended: 'Obviously-Semi',
    extendedThin: 'Obviously-Semi',
    extendedLight: 'Obviously-Semi',
    extendedMedium: 'Obviously-Semi',
    extendedSemiBold: 'Obviously-Semi',
    extendedBold: 'Obviously-Semi',
    extendedBlack: 'Obviously-Semi',
    extendedSuper: 'Obviously-Semi',
    extendedItalic: 'Obviously-Semi',
    extendedThinItalic: 'Obviously-Semi',
    extendedLightItalic: 'Obviously-Semi',
    extendedMediumItalic: 'Obviously-Semi',
    extendedSemiBoldItalic: 'Obviously-Semi',
    extendedBoldItalic: 'Obviously-Semi',
    extendedBlackItalic: 'Obviously-Semi',
  },

  // Inter font family
  inter: {
    thin: 'Inter-Thin',
    extraLight: 'Inter-ExtraLight',
    light: 'Inter-Light',
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
    extraBold: 'Inter-ExtraBold',
    black: 'Inter-Black',
  },

  // Icon font
  icomoon: 'icomoon',

  // Defaults
  primary: 'SatoshiVariable',
  secondary: 'Inter-Regular',
  heading: 'Obviously-Semi',
  display: 'SatoshiVariable-Bold_Bold',
} as const;

// Font sizes
export const fontSizes = {
  xs: 10,
  sm: 12,
  base: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
  '6xl': 48,
} as const;

// Font weights
export const fontWeights = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const;
