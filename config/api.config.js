/**
 * API configuration
 */

// Base API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

// API version
const API_VERSION = "v1";

// Default headers
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

// Timeout in milliseconds
const TIMEOUT = 30000; // 30 seconds

// Retry configuration
const RETRY_CONFIG = {
  retries: 3,
  initialDelay: 300, // 300ms
  maxDelay: 3000, // 3 seconds
};

// Endpoints
const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    refreshToken: "/auth/refresh-token",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
  users: {
    me: "/users/me",
    byId: (id) => `/users/${id}`,
    update: (id) => `/users/${id}`,
  },
  // Add other endpoints as needed
};

// Export API configuration
export const apiConfig = {
  baseUrl: API_URL,
  version: API_VERSION,
  url: `${API_URL}/${API_VERSION}`,
  headers: DEFAULT_HEADERS,
  timeout: TIMEOUT,
  retry: RETRY_CONFIG,
  endpoints: ENDPOINTS,
};

export default apiConfig;