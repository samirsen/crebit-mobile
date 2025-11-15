/**
 * API Service
 * Single entry point for all backend API calls with React Query integration
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../utils/apiClient';
import { API_ENDPOINTS, QUERY_KEYS, MUTATION_KEYS } from '../constants/api';
import type {
  // Health Check
  HealthCheckResponse,
  
  // Customer Management
  CheckCustomerByIdRequest,
  CheckCustomerByIdResponse,
  CreateCustomerRequest,
  CreateCustomerResponse,
  
  // External Account Management
  CreateExternalAccountRequest,
  CreateExternalAccountResponse,
  CheckExternalAccountRequest,
  CheckExternalAccountResponse,
  
  // Quote Management
  CreateQuoteRequest,
  CreateQuoteResponse,
  CreateQuoteNewRequest,
  CreateQuoteNewResponse,
  
  // Wallet Management
  CreateWalletRequest,
  CreateWalletResponse,
  
  // Payment Processing
  CreatePixPaymentRequest,
  CreatePixPaymentResponse,
  CreateSpeiPaymentRequest,
  CreateSpeiPaymentResponse,
  
  // Transaction Status & Monitoring
  WebhookStatusResponse,
  UserTransactionsResponse,
  TransactionStatusResponse,
  
  // Testing & Development
  TriggerMockWebhookRequest,
  TriggerMockWebhookResponse,
  SetupWebhookRequest,
  SetupWebhookResponse,
  
  // Webhook
  WebhookTestResponse,
} from '../types/api.types';

class ApiService {
  // ============================================================================
  // HEALTH CHECK
  // ============================================================================
  
  async healthCheck(): Promise<HealthCheckResponse> {
    return apiClient.get<HealthCheckResponse>(API_ENDPOINTS.HEALTH);
  }

  useHealthCheck() {
    return useQuery({
      queryKey: QUERY_KEYS.HEALTH,
      queryFn: () => this.healthCheck(),
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }

  // ============================================================================
  // CUSTOMER MANAGEMENT
  // ============================================================================
  
  async checkCustomerById(data: CheckCustomerByIdRequest): Promise<CheckCustomerByIdResponse> {
    return apiClient.post<CheckCustomerByIdResponse>(API_ENDPOINTS.CHECK_CUSTOMER_BY_ID, data);
  }

  useCheckCustomerById() {
    return useMutation({
      mutationKey: MUTATION_KEYS.CHECK_CUSTOMER,
      mutationFn: (data: CheckCustomerByIdRequest) => this.checkCustomerById(data),
    });
  }

  async createCustomer(data: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    return apiClient.post<CreateCustomerResponse>(API_ENDPOINTS.CREATE_CUSTOMER, data);
  }

  useCreateCustomer() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: MUTATION_KEYS.CREATE_CUSTOMER,
      mutationFn: (data: CreateCustomerRequest) => this.createCustomer(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CUSTOMER });
      },
    });
  }

  // ============================================================================
  // EXTERNAL ACCOUNT MANAGEMENT
  // ============================================================================
  
  async createExternalAccount(data: CreateExternalAccountRequest): Promise<CreateExternalAccountResponse> {
    return apiClient.post<CreateExternalAccountResponse>(API_ENDPOINTS.CREATE_EXTERNAL_ACCOUNT, data);
  }

  useCreateExternalAccount() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: MUTATION_KEYS.CREATE_EXTERNAL_ACCOUNT,
      mutationFn: (data: CreateExternalAccountRequest) => this.createExternalAccount(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.EXTERNAL_ACCOUNT });
      },
    });
  }

  async checkExternalAccount(data: CheckExternalAccountRequest): Promise<CheckExternalAccountResponse> {
    return apiClient.post<CheckExternalAccountResponse>(API_ENDPOINTS.CHECK_EXTERNAL_ACCOUNT, data);
  }

  useCheckExternalAccount() {
    return useMutation({
      mutationKey: MUTATION_KEYS.CHECK_EXTERNAL_ACCOUNT,
      mutationFn: (data: CheckExternalAccountRequest) => this.checkExternalAccount(data),
    });
  }

  // ============================================================================
  // QUOTE MANAGEMENT
  // ============================================================================
  
  async createQuote(data: CreateQuoteRequest): Promise<CreateQuoteResponse> {
    return apiClient.post<CreateQuoteResponse>(API_ENDPOINTS.CREATE_QUOTE, data);
  }

  useCreateQuote() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: MUTATION_KEYS.CREATE_QUOTE,
      mutationFn: (data: CreateQuoteRequest) => this.createQuote(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.QUOTE });
      },
    });
  }

  async createQuoteNew(data: CreateQuoteNewRequest): Promise<CreateQuoteNewResponse> {
    return apiClient.post<CreateQuoteNewResponse>(API_ENDPOINTS.CREATE_QUOTE_NEW, data);
  }

  useCreateQuoteNew() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: MUTATION_KEYS.CREATE_QUOTE_NEW,
      mutationFn: (data: CreateQuoteNewRequest) => this.createQuoteNew(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.QUOTE });
      },
    });
  }

  // ============================================================================
  // WALLET MANAGEMENT
  // ============================================================================
  
  async createWallet(data: CreateWalletRequest): Promise<CreateWalletResponse> {
    return apiClient.post<CreateWalletResponse>(API_ENDPOINTS.CREATE_WALLET, data);
  }

  useCreateWallet() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: MUTATION_KEYS.CREATE_WALLET,
      mutationFn: (data: CreateWalletRequest) => this.createWallet(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.WALLET });
      },
    });
  }

  // ============================================================================
  // PAYMENT PROCESSING
  // ============================================================================
  
  async createPixPayment(data: CreatePixPaymentRequest): Promise<CreatePixPaymentResponse> {
    return apiClient.post<CreatePixPaymentResponse>(API_ENDPOINTS.CREATE_PIX_PAYMENT, data);
  }

  useCreatePixPayment() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: MUTATION_KEYS.CREATE_PIX_PAYMENT,
      mutationFn: (data: CreatePixPaymentRequest) => this.createPixPayment(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PAYMENT });
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TRANSACTION });
      },
    });
  }

  async createSpeiPayment(data: CreateSpeiPaymentRequest): Promise<CreateSpeiPaymentResponse> {
    return apiClient.post<CreateSpeiPaymentResponse>(API_ENDPOINTS.CREATE_SPEI_PAYMENT, data);
  }

  useCreateSpeiPayment() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: MUTATION_KEYS.CREATE_SPEI_PAYMENT,
      mutationFn: (data: CreateSpeiPaymentRequest) => this.createSpeiPayment(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PAYMENT });
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TRANSACTION });
      },
    });
  }

  // ============================================================================
  // TRANSACTION STATUS & MONITORING
  // ============================================================================
  
  async getWebhookStatus(transactionId: string): Promise<WebhookStatusResponse> {
    return apiClient.get<WebhookStatusResponse>(`${API_ENDPOINTS.WEBHOOK_STATUS}/${transactionId}`);
  }

  useWebhookStatus(transactionId: string, enabled: boolean = true) {
    return useQuery({
      queryKey: [...QUERY_KEYS.WEBHOOK_STATUS, transactionId],
      queryFn: () => this.getWebhookStatus(transactionId),
      enabled: enabled && !!transactionId,
      refetchInterval: 5000, // Poll every 5 seconds
      staleTime: 1000, // Consider data stale after 1 second
    });
  }

  async getUserTransactions(userId: string): Promise<UserTransactionsResponse> {
    return apiClient.get<UserTransactionsResponse>(`${API_ENDPOINTS.USER_TRANSACTIONS}/${userId}`);
  }

  useUserTransactions(userId: string, enabled: boolean = true) {
    return useQuery({
      queryKey: [...QUERY_KEYS.USER_TRANSACTIONS, userId],
      queryFn: () => this.getUserTransactions(userId),
      enabled: enabled && !!userId,
      staleTime: 30 * 1000, // 30 seconds
    });
  }

  async getTransactionStatus(transactionId: string): Promise<TransactionStatusResponse> {
    return apiClient.get<TransactionStatusResponse>(`${API_ENDPOINTS.TRANSACTION_STATUS}/${transactionId}`);
  }

  useTransactionStatus(transactionId: string, enabled: boolean = true) {
    return useQuery({
      queryKey: [...QUERY_KEYS.TRANSACTION, transactionId],
      queryFn: () => this.getTransactionStatus(transactionId),
      enabled: enabled && !!transactionId,
      refetchInterval: 3000, // Poll every 3 seconds
      staleTime: 1000, // Consider data stale after 1 second
    });
  }

  // ============================================================================
  // TESTING & DEVELOPMENT
  // ============================================================================
  
  async triggerMockWebhook(data: TriggerMockWebhookRequest): Promise<TriggerMockWebhookResponse> {
    return apiClient.post<TriggerMockWebhookResponse>(API_ENDPOINTS.TRIGGER_MOCK_WEBHOOK, data);
  }

  useTriggerMockWebhook() {
    return useMutation({
      mutationKey: MUTATION_KEYS.TRIGGER_MOCK_WEBHOOK,
      mutationFn: (data: TriggerMockWebhookRequest) => this.triggerMockWebhook(data),
    });
  }

  async setupWebhook(data: SetupWebhookRequest): Promise<SetupWebhookResponse> {
    return apiClient.post<SetupWebhookResponse>(API_ENDPOINTS.SETUP_WEBHOOK, data);
  }

  useSetupWebhook() {
    return useMutation({
      mutationKey: MUTATION_KEYS.SETUP_WEBHOOK,
      mutationFn: (data: SetupWebhookRequest) => this.setupWebhook(data),
    });
  }

  // ============================================================================
  // WEBHOOK TEST
  // ============================================================================
  
  async testWebhook(): Promise<WebhookTestResponse> {
    return apiClient.get<WebhookTestResponse>(API_ENDPOINTS.WEBHOOK_UNBLOCKPAY);
  }

  useTestWebhook() {
    return useQuery({
      queryKey: ['webhook-test'],
      queryFn: () => this.testWebhook(),
      enabled: false, // Only run when manually triggered
    });
  }
}

export const apiService = new ApiService();
