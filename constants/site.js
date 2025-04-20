/**
 * Site constants
 */

// User roles
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
};

// Feature flags
export const FEATURES = {
  DARK_MODE: true,
  ANALYTICS: true,
  NOTIFICATIONS: true,
  USER_PROFILES: true,
};

// Site-wide limits
export const LIMITS = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_UPLOAD_FILES: 10,
  MAX_DESCRIPTION_LENGTH: 500,
};

// Supported languages
export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

// Currency options
export const CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
];

// Common status values
export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
  ARCHIVED: "archived",
  DELETED: "deleted",
};

// Messages
export const MESSAGES = {
  ERRORS: {
    GENERIC: "Something went wrong. Please try again.",
    NOT_FOUND: "The requested resource was not found.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
    VALIDATION: "Please check your input and try again.",
  },
  SUCCESS: {
    SAVED: "Changes saved successfully.",
    CREATED: "Created successfully.",
    UPDATED: "Updated successfully.",
    DELETED: "Deleted successfully.",
  },
};

// Regular expressions
export const REGEX = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  PHONE: /^\+?[0-9]{10,14}$/,
};

// Export all constants
export default {
  ROLES,
  FEATURES,
  LIMITS,
  LANGUAGES,
  CURRENCIES,
  STATUS,
  MESSAGES,
  REGEX,
};