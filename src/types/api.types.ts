/**
 * API Types and Interfaces
 * Contains all TypeScript interfaces for API requests and responses
 */

// ============================================================================
// COMMON TYPES
// ============================================================================

export interface ApiResponse<T = unknown> {
  success?: boolean;
  message?: string;
  error?: string;
  response?: string;
  data?: T;
}

export interface Address {
  street_line_1: string;
  street_line_2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface IdentityDocument {
  type: 'cpf' | 'passport' | 'national_id';
  value: string;
  country: string;
}

// ============================================================================
// HEALTH CHECK
// ============================================================================

export interface HealthCheckResponse {
  status: 'healthy';
  service: string;
  timestamp: string;
}

// ============================================================================
// CUSTOMER MANAGEMENT
// ============================================================================

export interface CheckCustomerByIdRequest {
  national_id: string;
}

export interface CheckCustomerByIdResponse {
  customer_exists: boolean;
  customer_id?: string;
  customer_name?: string;
  document_type?: string;
  document_value?: string;
  has_external_account?: boolean;
  has_wallet?: boolean;
  external_account_id?: string;
  wallet_id?: string;
  message: string;
}

export interface CreateCustomerRequest {
  type?: 'individual';
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  date_of_birth?: string;
  identity_documents?: IdentityDocument[];
  address?: Address;
  use_existing_customer?: boolean;
  existing_customer_id?: string;
}

export interface CreateCustomerResponse {
  message: string;
  customer_id: string;
  wallet_id: string;
  wallet_address: string;
  full_response: Record<string, unknown>;
}

// ============================================================================
// EXTERNAL ACCOUNT MANAGEMENT
// ============================================================================

export interface CreateExternalAccountRequest {
  customer_id: string;
  account_name: string;
  beneficiary_name: string;
  bank_name: string;
  bank_account_number: string;
  routing_number: string;
  address: Address;
}

export interface CreateExternalAccountResponse {
  message: string;
  external_account_id: string;
  reused_existing: boolean;
  full_response: Record<string, unknown>;
}

export interface CheckExternalAccountRequest {
  routing_number: string;
  account_number: string;
}

export interface CheckExternalAccountResponse {
  account_exists: boolean;
  external_account_id?: string;
  message: string;
}

// ============================================================================
// QUOTE MANAGEMENT
// ============================================================================

export interface CreateQuoteRequest {
  symbol: string;
  amount_usd: number;
}

export interface QuoteData {
  id: string;
  symbol: string;
  quotation: string;
  expires_at: number;
}

export interface CreateQuoteResponse {
  on_ramp: QuoteData;
  off_ramp: QuoteData;
  amount_usd: number;
  total_local_amount: number;
  total_fees_usd: number;
  effective_rate: number;
  expires_at: number;
  expires_at_readable: string;
}

export interface CreateQuoteNewRequest {
  symbol: string;
  quote_type: 'on_ramp' | 'off_ramp';
}

export interface CreateQuoteNewResponse {
  id: string;
  symbol: string;
  type: string;
  quotation: string;
  expires_at: number;
}

// ============================================================================
// WALLET MANAGEMENT
// ============================================================================

export interface CreateWalletRequest {
  customer_id: string;
  name: string;
  blockchain: 'solana' | 'ethereum' | 'polygon';
}

export interface WalletData {
  id: string;
  name: string;
  blockchain: string;
  address: string;
}

export interface CreateWalletResponse {
  wallet_id: string;
  wallet_data: WalletData;
}

// ============================================================================
// PAYMENT PROCESSING
// ============================================================================

export interface CreatePixPaymentRequest {
  amount_brl: number;
  customer_id: string;
  wallet_address: string;
  quote_id: string;
  sender_name: string;
  sender_document: string;
}

export interface CreatePixPaymentResponse {
  success: boolean;
  transaction: Record<string, unknown>;
  transaction_id: string;
  status: string;
  amount_brl: number;
  wallet_address: string;
  deposit_address: string;
}

export interface CreateSpeiPaymentRequest {
  amount_mxn: number;
  customer_id: string;
  wallet_id: string;
  quote_id: string;
  sender_clabe: string;
}

export interface CreateSpeiPaymentResponse {
  success: boolean;
  transaction: Record<string, unknown>;
  transaction_id: string;
  status: string;
  amount_mxn: number;
  wallet_id: string;
  deposit_address: string;
  bank_account: Record<string, unknown>;
  beneficiary: Record<string, unknown>;
}

// ============================================================================
// TRANSACTION STATUS & MONITORING
// ============================================================================

export interface WebhookStatusResponse {
  payin_created: boolean;
  payin_completed: boolean;
  payin_amount_brl?: number;
  payin_amount_usdc?: number;
  customer_id: string;
  timestamp: string;
  offramp_transaction?: {
    id: string;
    status: string;
    amount: number;
    currency: string;
    created_at: string;
  };
}

export interface TransactionSummary {
  total_sent: number;
  total_completed: number;
  total_pending: number;
  transaction_count: number;
}

export interface UserTransaction {
  id: string;
  unblockpay_transaction_id: string;
  amount_usd: number;
  amount_local: number;
  local_currency: string;
  created_at: string;
  updated_at: string;
  status: string;
}

export interface UserTransactionsResponse {
  transactions: UserTransaction[];
  summary: TransactionSummary;
}

export interface TransactionStatusResponse {
  success: boolean;
  transaction: {
    status: string;
    id: string;
  };
}

// ============================================================================
// TESTING & DEVELOPMENT
// ============================================================================

export interface TriggerMockWebhookRequest {
  event_type: 'payin.created' | 'payin.processing' | 'payin.completed' | 'payout.completed' | 'payout.failed';
  transaction_id: string;
}

export interface TriggerMockWebhookResponse {
  success: boolean;
  event: Record<string, unknown>;
  message: string;
  webhook_processed: boolean;
}

export interface SetupWebhookRequest {
  webhook_url: string;
}

export interface SetupWebhookResponse {
  success: boolean;
  webhook: Record<string, unknown>;
  message: string;
}

// ============================================================================
// WEBHOOK
// ============================================================================

export interface WebhookTestResponse {
  status: string;
  message: string;
  timestamp: string;
  url: string;
  method: string;
}

// ============================================================================
// ERROR TYPES
// ============================================================================

export interface ApiError {
  error: string;
  response?: string;
  status?: number;
}

export type ApiErrorResponse = ApiError;
