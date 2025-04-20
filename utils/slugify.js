/**
 * Utility function to convert strings to URL-friendly slugs
 */

export function slugify(text, options = {}) {
  if (!text) return '';
  
  const defaultOptions = {
    lower: true,     // Convert to lowercase
    remove: /[*+~.()'"!:@]/g,  // Characters to remove
    strict: false,   // Strip special characters except replacement
    trim: true,      // Trim leading and trailing whitespace
  };
  
  // Merge options
  const opts = { ...defaultOptions, ...options };
  
  let result = String(text);
  
  // Convert to lowercase if option is set
  if (opts.lower) {
    result = result.toLowerCase();
  }
  
  // Replace spaces with hyphens
  result = result.replace(/\s+/g, '-');
  
  // Remove characters defined in remove pattern
  if (opts.remove) {
    result = result.replace(opts.remove, '');
  }
  
  // Replace & with 'and'
  result = result.replace(/&/g, '-and-');
  
  // Apply strict mode
  if (opts.strict) {
    result = result.replace(/[^a-zA-Z0-9\-]/g, '');
  }
  
  // Remove duplicate hyphens
  result = result.replace(/-+/g, '-');
  
  // Trim leading and trailing hyphens
  if (opts.trim) {
    result = result.replace(/^-+|-+$/g, '');
  }
  
  return result;
}

/**
 * Generate a unique slug based on an input string and an array of existing slugs
 * @param {string} text - Input text to slugify
 * @param {string[]} existingSlugs - Array of existing slugs to check against
 * @param {object} options - Options to pass to the slugify function
 * @returns {string} - Unique slug
 */
export function uniqueSlug(text, existingSlugs = [], options = {}) {
  const baseSlug = slugify(text, options);
  
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }
  
  // If the slug already exists, add a number suffix
  let counter = 1;
  let uniqueSlug = `${baseSlug}-${counter}`;
  
  while (existingSlugs.includes(uniqueSlug)) {
    counter += 1;
    uniqueSlug = `${baseSlug}-${counter}`;
  }
  
  return uniqueSlug;
}

export default {
  slugify,
  uniqueSlug,
};