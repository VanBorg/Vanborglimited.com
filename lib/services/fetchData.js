/**
 * Utility functions for fetching data from APIs
 */

// Basic fetch wrapper with error handling
export async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    // Parse the JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Get data with query parameters
export async function getData(url, params = {}) {
  // Build URL with query parameters
  const queryParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value);
    }
  });
  
  const queryString = queryParams.toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  
  return fetchData(fullUrl, { method: 'GET' });
}

// Post data to an API
export async function postData(url, data = {}, options = {}) {
  return fetchData(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
}

// Put data to an API (update)
export async function putData(url, data = {}, options = {}) {
  return fetchData(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
}

// Delete data from an API
export async function deleteData(url, options = {}) {
  return fetchData(url, {
    method: 'DELETE',
    ...options,
  });
}

// Export a default object with all methods
export default {
  fetch: fetchData,
  get: getData,
  post: postData,
  put: putData,
  delete: deleteData,
};