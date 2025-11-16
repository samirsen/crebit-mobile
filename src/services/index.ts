import {apiService} from './apiService';

export {apiService} from './apiService';

// Export React Query hooks for easy access
export const useHealthCheck = () => apiService.useHealthCheck();
export const useCheckCustomerById = () => apiService.useCheckCustomerById();
export const useCreateCustomer = () => apiService.useCreateCustomer();

// Signup flow exports
export const signUpUser = (email: string, password: string) => apiService.signUpUser(email, password);
export const signUpComplete = (signUpData: any, authData: any) => apiService.signUpComplete(signUpData, authData);
export const useCreateExternalAccount = () =>
  apiService.useCreateExternalAccount();
export const useCheckExternalAccount = () =>
  apiService.useCheckExternalAccount();
export const useCreateQuote = () => apiService.useCreateQuote();
export const useCreateQuoteNew = () => apiService.useCreateQuoteNew();
export const useCreateWallet = () => apiService.useCreateWallet();
export const useCreatePixPayment = () => apiService.useCreatePixPayment();
export const useCreateSpeiPayment = () => apiService.useCreateSpeiPayment();
export const useWebhookStatus = (transactionId: string, enabled?: boolean) =>
  apiService.useWebhookStatus(transactionId, enabled);
export const useUserTransactions = (userId: string, enabled?: boolean) =>
  apiService.useUserTransactions(userId, enabled);
export const useTransactionStatus = (
  transactionId: string,
  enabled?: boolean,
) => apiService.useTransactionStatus(transactionId, enabled);
export const useTriggerMockWebhook = () => apiService.useTriggerMockWebhook();
export const useSetupWebhook = () => apiService.useSetupWebhook();
export const useTestWebhook = () => apiService.useTestWebhook();
