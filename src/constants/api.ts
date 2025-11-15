/**
 * API Configuration Constants
 * Contains base URLs, endpoints, and API-related constants
 */

export const API_CONFIG = {
  BASE_URL: 'http://localhost:5001',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
} as const;

export const API_ENDPOINTS = {
  // Health Check
  HEALTH: '/health',
  
  // Customer Management
  CHECK_CUSTOMER_BY_ID: '/api/check-customer-by-id',
  CREATE_CUSTOMER: '/api/create-customer',
  
  // External Account Management
  CREATE_EXTERNAL_ACCOUNT: '/api/create-external-account',
  CHECK_EXTERNAL_ACCOUNT: '/api/check-external-account',
  
  // Quote Management
  CREATE_QUOTE: '/api/create-quote',
  CREATE_QUOTE_NEW: '/api/create-quote-new',
  
  // Wallet Management
  CREATE_WALLET: '/api/create-wallet',
  
  // Payment Processing
  CREATE_PIX_PAYMENT: '/api/create-pix-payment',
  CREATE_SPEI_PAYMENT: '/api/create-spei-payment',
  
  // Transaction Status & Monitoring
  WEBHOOK_STATUS: '/api/webhook-status',
  USER_TRANSACTIONS: '/api/user-transactions',
  TRANSACTION_STATUS: '/transaction-status',
  
  // Testing & Development
  TRIGGER_MOCK_WEBHOOK: '/api/trigger-mock-webhook',
  SETUP_WEBHOOK: '/api/setup-webhook',
  
  // Webhook
  WEBHOOK_UNBLOCKPAY: '/webhook/unblockpay',
} as const;

export const QUERY_KEYS = {
  HEALTH: ['health'] as const,
  CUSTOMER: ['customer'] as const,
  EXTERNAL_ACCOUNT: ['external-account'] as const,
  QUOTE: ['quote'] as const,
  WALLET: ['wallet'] as const,
  PAYMENT: ['payment'] as const,
  TRANSACTION: ['transaction'] as const,
  USER_TRANSACTIONS: ['user-transactions'] as const,
  WEBHOOK_STATUS: ['webhook-status'] as const,
} as const;

export const MUTATION_KEYS = {
  CHECK_CUSTOMER: ['check-customer'] as const,
  CREATE_CUSTOMER: ['create-customer'] as const,
  CREATE_EXTERNAL_ACCOUNT: ['create-external-account'] as const,
  CHECK_EXTERNAL_ACCOUNT: ['check-external-account'] as const,
  CREATE_QUOTE: ['create-quote'] as const,
  CREATE_QUOTE_NEW: ['create-quote-new'] as const,
  CREATE_WALLET: ['create-wallet'] as const,
  CREATE_PIX_PAYMENT: ['create-pix-payment'] as const,
  CREATE_SPEI_PAYMENT: ['create-spei-payment'] as const,
  TRIGGER_MOCK_WEBHOOK: ['trigger-mock-webhook'] as const,
  SETUP_WEBHOOK: ['setup-webhook'] as const,
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
