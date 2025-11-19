/**
 * Plaid Service
 * Handles Plaid Link token creation and public token exchange
 */

import { API_CONFIG, API_ENDPOINTS } from '../constants';

export interface CreateLinkTokenRequest {
  user_id: string;
  client_name?: string;
  products?: string[];
  country_codes?: string[];
  language?: string;
  android_package_name?: string;
}

export interface CreateLinkTokenResponse {
  link_token: string;
  expiration: string;
  request_id: string;
}

export interface ExchangePublicTokenRequest {
  public_token: string;
  institution_id?: string;
  accounts?: Array<{
    id: string;
    name: string;
    mask: string;
    type: string;
    subtype: string;
  }>;
}

export interface ExchangePublicTokenResponse {
  access_token: string;
  item_id: string;
  request_id: string;
}

export interface PlaidError {
  error_type: string;
  error_code: string;
  error_message: string;
  display_message?: string;
}

class PlaidService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  /**
   * Create a link token for Plaid Link initialization
   */
  async createLinkToken(request: CreateLinkTokenRequest): Promise<CreateLinkTokenResponse> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.PLAID_CREATE_LINK_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: request.user_id,
          client_name: request.client_name || 'Crebit',
          products: request.products || ['transactions', 'auth'],
          country_codes: request.country_codes || ['US'],
          language: request.language || 'en',
          android_package_name: request.android_package_name || 'com.crebit',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create link token');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating link token:', error);
      throw error;
    }
  }

  /**
   * Exchange public token for access token
   */
  async exchangePublicToken(request: ExchangePublicTokenRequest): Promise<ExchangePublicTokenResponse> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.PLAID_EXCHANGE_PUBLIC_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to exchange public token');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error exchanging public token:', error);
      throw error;
    }
  }

  /**
   * Handle Plaid Link success
   */
  async handleLinkSuccess(publicToken: string, metadata: any): Promise<ExchangePublicTokenResponse> {
    return this.exchangePublicToken({
      public_token: publicToken,
      institution_id: metadata.institution?.id,
      accounts: metadata.accounts,
    });
  }
}

// Export singleton instance
export const plaidService = new PlaidService();
export default plaidService;
