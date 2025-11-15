/**
 * API Client Types
 * TypeScript interfaces for API client configuration and responses
 */

import type { AxiosRequestConfig, AxiosInstance } from 'axios';

export interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  retryAttempts: number;
}

export interface ApiClientInstance {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  getInstance: () => AxiosInstance;
}

export interface RequestLogData {
  method: string;
  url: string;
  data?: any;
}

export interface ResponseLogData {
  status: number;
  url: string;
  data?: any;
}
