// src/config/api.js
// Centralized API configuration and helper functions

// API Base URL - Change this to your backend URL
export const API_BASE = 'https://baraspot-2-0-version-backend.onrender.com/api';  // ADDED /api HERE!

// API Endpoints
export const ENDPOINTS = {
  // Items
  getAllItems: '/items',
  createItem: '/items',
  getItemById: (id) => `/items/${id}`,
  updateItem: (id) => `/items/${id}`,
  deleteItem: (id) => `/items/${id}`,
  toggleLike: (id) => `/items/${id}/like`,
  
  // Filters and stats
  filters: '/filters',
  stats: '/stats',
  health: '/health'
};

// API Helper Functions

/**
 * Fetch items with filters and pagination
 * @param {Object} params - Query parameters
 * @returns {Promise} API response
 */
export const fetchItems = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams({
      search: params.search || '',
      condition: params.condition || '',
      category: params.category || '',
      location: params.location || '',
      page: params.page || '1',
      limit: params.limit || '12'
    });

    // Remove empty params
    Array.from(queryParams.keys()).forEach(key => {
      if (!queryParams.get(key)) queryParams.delete(key);
    });

    const response = await fetch(`${API_BASE}${ENDPOINTS.getAllItems}?${queryParams}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

/**
 * Create a new item
 * @param {FormData} formData - Item data including images
 * @returns {Promise} API response
 */
export const createItem = async (formData) => {
  try {
    const response = await fetch(`${API_BASE}${ENDPOINTS.createItem}`, {
      method: 'POST',
      body: formData
      // Don't set Content-Type header - browser will set it with boundary for FormData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to create item');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

/**
 * Toggle like status for an item
 * @param {string|number} itemId - Item ID
 * @returns {Promise} API response
 */
export const toggleItemLike = async (itemId) => {
  try {
    const response = await fetch(`${API_BASE}${ENDPOINTS.toggleLike(itemId)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to toggle like');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error toggling like:', error);
    throw error;
  }
};

/**
 * Get a single item by ID
 * @param {string|number} itemId - Item ID
 * @returns {Promise} API response
 */
export const getItemById = async (itemId) => {
  try {
    const response = await fetch(`${API_BASE}${ENDPOINTS.getItemById(itemId)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
};

/**
 * Get filter options (categories, locations, conditions)
 * @returns {Promise} API response
 */
export const getFilters = async () => {
  try {
    const response = await fetch(`${API_BASE}${ENDPOINTS.filters}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching filters:', error);
    throw error;
  }
};

/**
 * Get statistics
 * @returns {Promise} API response
 */
export const getStats = async () => {
  try {
    const response = await fetch(`${API_BASE}${ENDPOINTS.stats}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

/**
 * Generic API call helper
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise} API response
 */
export const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Export default configuration
export default {
  API_BASE,
  ENDPOINTS,
  fetchItems,
  createItem,
  toggleItemLike,
  getItemById,
  getFilters,
  getStats,
  apiCall
};