/**
 * Date formatting utility functions
 */

// Format a date as a string (e.g., "January 1, 2023")
export function formatDate(date, options = {}) {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Default format options
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  // Merge default options with provided options
  const formatOptions = { ...defaultOptions, ...options };
  
  return new Intl.DateTimeFormat('en-US', formatOptions).format(dateObj);
}

// Format a date as a relative time (e.g., "2 days ago")
export function formatRelativeTime(date) {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now - dateObj;
  
  // Convert to seconds
  const diffInSecs = Math.floor(diffInMs / 1000);
  
  // Less than a minute
  if (diffInSecs < 60) {
    return 'just now';
  }
  
  // Less than an hour
  if (diffInSecs < 3600) {
    const minutes = Math.floor(diffInSecs / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  
  // Less than a day
  if (diffInSecs < 86400) {
    const hours = Math.floor(diffInSecs / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  
  // Less than a week
  if (diffInSecs < 604800) {
    const days = Math.floor(diffInSecs / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  
  // Less than a month
  if (diffInSecs < 2592000) {
    const weeks = Math.floor(diffInSecs / 604800);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }
  
  // Less than a year
  if (diffInSecs < 31536000) {
    const months = Math.floor(diffInSecs / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  
  // More than a year
  const years = Math.floor(diffInSecs / 31536000);
  return `${years} year${years > 1 ? 's' : ''} ago`;
}

// Format a date range (e.g., "January 1 - February 1, 2023")
export function formatDateRange(startDate, endDate, options = {}) {
  if (!startDate || !endDate) return '';
  
  const startObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const endObj = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  // If same year, only show year once
  const sameYear = startObj.getFullYear() === endObj.getFullYear();
  
  // If same month, only show month once
  const sameMonth = sameYear && startObj.getMonth() === endObj.getMonth();
  
  // Format start date
  const startOptions = {
    month: 'long',
    day: 'numeric',
    year: sameYear ? undefined : 'numeric',
  };
  
  // Format end date
  const endOptions = {
    month: sameMonth ? undefined : 'long',
    day: 'numeric',
    year: 'numeric',
  };
  
  const formattedStart = formatDate(startObj, startOptions);
  const formattedEnd = formatDate(endObj, endOptions);
  
  return `${formattedStart} - ${formattedEnd}`;
}

export default {
  formatDate,
  formatRelativeTime,
  formatDateRange,
};