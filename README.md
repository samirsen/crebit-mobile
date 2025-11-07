# Crebit

A modern React Native currency exchange and money transfer application with real-time rates and seamless user experience.

## 🚀 Features

- **Live Currency Exchange**: Real-time exchange rates with instant conversion calculations
- **Multi-Currency Support**: Support for USD, BRL, and MXN with easy currency switching
- **Service Comparison**: Compare Crebit rates with competitors (Wise, Flywire)
- **Transaction Management**: Track monthly and lifetime conversions with detailed history
- **Account Management**: Complete user profile management with KYC compliance
- **Swipe-to-Pay**: Intuitive swipe gesture for initiating transfers

## 🏗️ Architecture

Built with modern React Native architecture patterns:

- **Redux Toolkit** for state management
- **React Navigation v7** with nested navigators (Root/Auth/App/Tabs)
- **Component-Controller-Styles-Types** separation for maintainability
- **Custom hooks** for reusable logic and keyboard handling
- **TypeScript** for type safety throughout the application

## 📱 Screens

- **Home**: Currency exchange with live rates and comparison tools
- **Transfer**: Transaction history and conversion tracking
- **Account**: User profile management and settings

## 🛠️ Tech Stack

- React Native 0.77.0
- TypeScript 5.0.4
- Redux Toolkit & React Redux
- React Navigation v7
- React Native Linear Gradient
- React Native Vector Icons
- React Native Gesture Handler

## 📋 Prerequisites

- Node.js >= 18
- React Native development environment
- iOS: Xcode and CocoaPods
- Android: Android Studio and SDK

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# iOS setup (first time only)
bundle install
bundle exec pod install
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Development

```bash
# Run linter
npm run lint

# Run tests
npm test
```

## 📁 Project Structure

```
Crebit/
├── __tests__/                    # Test files
│   └── App.test.tsx
├── android/                      # Android native code
│   ├── app/
│   │   ├── build.gradle
│   │   ├── src/main/
│   │   └── ...
│   ├── gradle/
│   └── ...
├── ios/                          # iOS native code
│   ├── Crebit/
│   │   ├── AppDelegate.swift
│   │   ├── Images.xcassets/
│   │   ├── Info.plist
│   │   └── LaunchScreen.storyboard
│   ├── Crebit.xcodeproj/
│   ├── Podfile
│   └── Pods/
├── assets/                       # Static assets
│   ├── fonts/
│   │   └── icomoon/             # Custom icon fonts
│   │       ├── *.otf            # OpenType fonts
│   │       ├── *.ttf            # TrueType fonts
│   │       └── selection.json   # Icon mappings
│   └── images/
│       └── profile.png
├── src/                          # Source code
│   ├── components/              # Reusable UI components
│   │   ├── ConversionCard/
│   │   ├── CountrySelectModal/
│   │   ├── CurrencyInput/
│   │   ├── CustomButton/
│   │   ├── CustomIcon/
│   │   ├── Header/
│   │   ├── InfoCard/
│   │   ├── Profile/
│   │   ├── ServiceComparisonCard/
│   │   ├── StatusBadge/
│   │   ├── StyledInputBox/
│   │   ├── StyledText/
│   │   ├── SwapButton/
│   │   ├── SwipeToExchangeButton/
│   │   └── TransactionHistory/
│   ├── constants/               # App constants
│   │   ├── colors.ts           # Color palette
│   │   └── spacing.ts          # Spacing values
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAppDispatch.ts   # Redux dispatch hook
│   │   ├── useAppSelector.ts   # Redux selector hook
│   │   ├── useKeyboardVisibility.ts
│   │   ├── useMemoizedValue.ts
│   │   └── useStatusBar.ts
│   ├── navigation/              # Navigation configuration
│   │   ├── AppNavigator.tsx    # Main app navigator
│   │   ├── AuthNavigator.tsx   # Authentication flow
│   │   ├── MainTabs.tsx        # Bottom tab navigator
│   │   └── RootNavigator.tsx   # Root navigation wrapper
│   ├── screens/                 # Screen components (MVC pattern)
│   │   ├── Account/
│   │   │   ├── Account.component.tsx
│   │   │   ├── Account.controller.ts
│   │   │   ├── Account.styles.ts
│   │   │   ├── Account.types.ts
│   │   │   └── index.ts
│   │   ├── Home/
│   │   │   ├── Home.component.tsx
│   │   │   ├── Home.controller.ts
│   │   │   ├── Home.styles.ts
│   │   │   ├── Home.types.ts
│   │   │   └── index.ts
│   │   └── Transfer/
│   │       ├── Transfer.component.tsx
│   │       ├── Transfer.controller.ts
│   │       ├── Transfer.styles.ts
│   │       ├── Transfer.types.ts
│   │       └── index.ts
│   ├── store/                   # Redux store configuration
│   │   ├── slices/
│   │   │   ├── accountSlice.ts  # Account state management
│   │   │   └── authSlice.ts     # Authentication state
│   │   └── store.ts             # Store configuration
│   └── utils/                   # Utility functions
│       ├── formatCurrency.ts    # Currency formatting
│       └── logger.ts            # Logging utilities
├── vendor/                       # Ruby gems (iOS dependencies)
├── node_modules/                 # Node.js dependencies
├── App.tsx                       # Root component
├── index.js                      # Entry point
├── app.json                      # React Native configuration
├── babel.config.js               # Babel configuration
├── jest.config.js                # Jest testing configuration
├── metro.config.js               # Metro bundler configuration
├── react-native.config.js        # React Native configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Dependency lock file
├── yarn.lock                     # Yarn lock file
├── Gemfile                       # Ruby dependencies
├── Gemfile.lock                  # Ruby dependency lock
└── README.md                     # Project documentation
```

## 🔒 Compliance

- Fully compliant with KYC regulations
- Registered under financial law with licensed partners
- Secure transaction processing

## 📄 License

Private - All rights reserved
