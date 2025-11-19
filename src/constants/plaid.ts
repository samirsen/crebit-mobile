/**
 * Plaid Configuration Constants
 * Contains Plaid API configuration and environment settings
 */

export const PLAID_CONFIG = {
  CLIENT_ID: '68686238755640002483cc2e',
  // Note: In production, these should be loaded from secure environment variables
  // For now, using the provided credentials
  ENVIRONMENT: 'sandbox' as const, // 'sandbox' | 'development' | 'production'
  PRODUCTS: ['transactions', 'auth'] as const,
  COUNTRY_CODES: ['US'] as const,
  LANGUAGE: 'en' as const,
} as const;

// Plaid endpoints are now defined in api.ts

export type PlaidEnvironment = typeof PLAID_CONFIG.ENVIRONMENT;
export type PlaidProduct = typeof PLAID_CONFIG.PRODUCTS[number];
export type PlaidCountryCode = typeof PLAID_CONFIG.COUNTRY_CODES[number];
