export const colors = {
  primary: '#1A4A3A', // Dark green from image
  secondary: '#003233', // Olive green for active buttons
  success: '#4CAF50',
  warning: '#FF9500',
  error: '#FF3B30',
  
  background: '#003233', // Very dark green background
  surface: '#FFFFFF', // White cards
  cardBackground: '#1E3E2E', // Dark green cards
  liveRateCard: '#1A3A2A', // Darker green for live rate card
  
  text: {
    primary: '#FFFFFF',
    secondary: '#A0B8A8',
    tertiary: '#8FA89A',
    accent: '#E6D700', // Bright yellow for rates
    dark: '#333333', // Dark text for white backgrounds
    muted: '#666666', // Muted text
  },
  
  border: '#2D4A3A',
  separator: '#E5E5EA',
  
  // Button colors
  button: {
    active: '#4A6B4A', // Olive green for active state
    inactive: 'transparent',
    text: '#FFFFFF',
    inactiveText: '#A0B8A8',
  },
  
  // Service colors
  services: {
    crebit: '#E6D700',
    wise: '#FFFFFF',
    flywire: '#FFFFFF',
  },
} as const;
