/**
 * Custom hook for Plaid Link integration
 */

import { useCallback, useState } from 'react';
import { create, open, LinkSuccess, LinkExit } from 'react-native-plaid-link-sdk';
import { plaidService } from '../services/plaidService';
import { useAppSelector } from './useAppSelector';

export interface UsePlaidLinkOptions {
  onSuccess?: (publicToken: string, metadata: any) => void;
  onExit?: (error: any, metadata: any) => void;
}

export const usePlaidLink = (options: UsePlaidLinkOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [linkToken, setLinkToken] = useState<string | null>(null);
  
  // Get user info from Redux store
  const user = useAppSelector((state) => state.auth.user);

  const createLinkToken = useCallback(async () => {
    if (!user?.id) {
      setError('User not authenticated');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await plaidService.createLinkToken({
        user_id: user.id,
        client_name: 'Crebit',
        products: ['transactions', 'auth'],
        country_codes: ['US'],
        language: 'en',
        android_package_name: 'com.crebit',
      });

      setLinkToken(response.link_token);
      
      // Initialize Plaid Link with the token
      create({
        token: response.link_token,
        noLoadingState: false,
      });

      return response.link_token;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create link token';
      setError(errorMessage);
      console.error('Error creating link token:', err);
    } finally {
      setIsLoading(false);
    }
  }, [user?.id]);

  const openPlaidLink = useCallback(async () => {
    if (!linkToken) {
      // Create link token first if it doesn't exist
      const token = await createLinkToken();
      if (!token) return;
    }

    const onSuccess = (success: LinkSuccess) => {
      console.log('Plaid Link Success:', success);
      
      // Handle the success callback
      if (options.onSuccess) {
        options.onSuccess(success.publicToken, success.metadata);
      } else {
        // Default behavior: exchange public token
        handleLinkSuccess(success.publicToken, success.metadata);
      }
    };

    const onExit = (linkExit: LinkExit) => {
      console.log('Plaid Link Exit:', linkExit);
      
      if (options.onExit) {
        options.onExit(linkExit.error, linkExit.metadata);
      }
      
      if (linkExit.error) {
        setError(linkExit.error.errorMessage || 'Plaid Link failed');
      }
    };

    try {
      open({
        onSuccess,
        onExit,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to open Plaid Link';
      setError(errorMessage);
      console.error('Error opening Plaid Link:', err);
    }
  }, [linkToken, options, createLinkToken]);

  const handleLinkSuccess = useCallback(async (publicToken: string, metadata: any) => {
    setIsLoading(true);
    try {
      const result = await plaidService.handleLinkSuccess(publicToken, metadata);
      console.log('Token exchange successful:', result);
      
      // You can dispatch to Redux store or handle the access token as needed
      // For example: dispatch(setPlaidAccessToken(result.access_token));
      
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to exchange public token';
      setError(errorMessage);
      console.error('Error exchanging public token:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    linkToken,
    createLinkToken,
    openPlaidLink,
    handleLinkSuccess,
  };
};
