/**
 * Currency utilities for Van Borg Limited
 * Supports both EUR (Euro) and GBP (British Pounds) formatting
 */

export type CurrencyCode = 'EUR' | 'GBP';

export const CURRENCY_EUR = 'EUR' as const;
export const CURRENCY_GBP = 'GBP' as const;

export const CURRENCY_SYMBOLS = {
  EUR: '€',
  GBP: '£',
} as const;

export const CURRENCY_LOCALES = {
  EUR: 'nl-NL',
  GBP: 'en-GB',
} as const;

/**
 * Format a number as currency (EUR or GBP)
 * @param amount - The numeric amount to format
 * @param currency - Currency code ('EUR' or 'GBP'), defaults to 'EUR'
 * @param options - Intl.NumberFormat options
 * @returns Formatted currency string (e.g., "€1,999" or "£1,999")
 */
export const formatCurrency = (
  amount: number,
  currency: CurrencyCode = 'EUR',
  options: Intl.NumberFormatOptions = {}
): string => {
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  };

  const locale = CURRENCY_LOCALES[currency];
  return new Intl.NumberFormat(locale, defaultOptions).format(amount);
};

/**
 * Format a price range string
 * @param min - Minimum price
 * @param max - Maximum price
 * @param currency - Currency code ('EUR' or 'GBP'), defaults to 'EUR'
 * @returns Formatted price range (e.g., "€799-€4,999" or "£799-£4,999")
 */
export const formatPriceRange = (min: number, max: number, currency: CurrencyCode = 'EUR'): string => {
  return `${formatCurrency(min, currency)}-${formatCurrency(max, currency)}`;
};

/**
 * Parse a price string and return the numeric value
 * @param priceString - Price string like "From €1,999" or "£999/mo"
 * @returns Numeric value
 */
export const parsePrice = (priceString: string): number => {
  const numericValue = priceString.replace(/[€£,\s]/g, '').replace(/\/mo$/, '');
  return parseFloat(numericValue) || 0;
};

/**
 * Validate that a price string uses EUR or GBP currency
 * @param priceString - Price string to validate
 * @returns true if valid EUR or GBP format
 */
export const isValidPrice = (priceString: string): boolean => {
  return (priceString.includes('€') || priceString.includes('£')) && !priceString.includes('$');
};

/**
 * Validate that a price string uses GBP currency
 * @param priceString - Price string to validate
 * @returns true if valid GBP format
 * @deprecated Use isValidPrice instead
 */
export const isValidGBPPrice = (priceString: string): boolean => {
  return priceString.includes('£') && !priceString.includes('$');
};

/**
 * Convert USD to EUR (approximate conversion)
 * @param usdAmount - Amount in USD
 * @returns Amount in EUR
 */
export const convertUSDToEUR = (usdAmount: number): number => {
  // Approximate conversion rate (update as needed)
  const USD_TO_EUR_RATE = 0.92;
  return Math.round(usdAmount * USD_TO_EUR_RATE);
};

/**
 * Convert USD to GBP (approximate conversion)
 * @param usdAmount - Amount in USD
 * @returns Amount in GBP
 */
export const convertUSDToGBP = (usdAmount: number): number => {
  // Approximate conversion rate (update as needed)
  const USD_TO_GBP_RATE = 0.79;
  return Math.round(usdAmount * USD_TO_GBP_RATE);
};

/**
 * Convert EUR to GBP (approximate conversion)
 * @param eurAmount - Amount in EUR
 * @returns Amount in GBP
 */
export const convertEURToGBP = (eurAmount: number): number => {
  // Approximate conversion rate (update as needed)
  const EUR_TO_GBP_RATE = 0.86;
  return Math.round(eurAmount * EUR_TO_GBP_RATE);
};

/**
 * Convert GBP to EUR (approximate conversion)
 * @param gbpAmount - Amount in GBP
 * @returns Amount in EUR
 */
export const convertGBPToEUR = (gbpAmount: number): number => {
  // Approximate conversion rate (update as needed)
  const GBP_TO_EUR_RATE = 1.16;
  return Math.round(gbpAmount * GBP_TO_EUR_RATE);
};
