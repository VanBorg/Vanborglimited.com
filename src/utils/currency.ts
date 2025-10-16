/**
 * Currency utilities for Van Borg Limited
 * Ensures consistent GBP formatting across the application
 */

export const CURRENCY_CODE = 'GBP' as const;
export const CURRENCY_SYMBOL = '£' as const;
export const LOCALE = 'en-GB' as const;

/**
 * Format a number as British Pounds currency
 * @param amount - The numeric amount to format
 * @param options - Intl.NumberFormat options
 * @returns Formatted currency string (e.g., "£1,999")
 */
export const formatCurrency = (
  amount: number,
  options: Intl.NumberFormatOptions = {}
): string => {
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: CURRENCY_CODE,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  };

  return new Intl.NumberFormat(LOCALE, defaultOptions).format(amount);
};

/**
 * Format a price range string
 * @param min - Minimum price
 * @param max - Maximum price
 * @returns Formatted price range (e.g., "£799-£4,999")
 */
export const formatPriceRange = (min: number, max: number): string => {
  return `${formatCurrency(min)}-${formatCurrency(max)}`;
};

/**
 * Parse a price string and return the numeric value
 * @param priceString - Price string like "From £1,999" or "£999/mo"
 * @returns Numeric value
 */
export const parsePrice = (priceString: string): number => {
  const numericValue = priceString.replace(/[£,\s]/g, '').replace(/\/mo$/, '');
  return parseFloat(numericValue) || 0;
};

/**
 * Validate that a price string uses GBP currency
 * @param priceString - Price string to validate
 * @returns true if valid GBP format
 */
export const isValidGBPPrice = (priceString: string): boolean => {
  return priceString.includes('£') && !priceString.includes('$');
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
