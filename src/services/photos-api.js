import axios from 'axios';
import.meta.env.VITE_API_KEY;

/**
 * Fetches  photos from Unsplash API based on query parameters.
 *
 * @param {string} query - The search query string.
 * @param {number} page - The page number for pagination.
 * @param {number} perPage - The number of results per page.
 * @returns {Promise<Object>} - The response data from the API.
 */

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers = {
  common: { Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}` },
};

axios.defaults.params = {
  orientation: 'landscape',
  per_page: 30,
};

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(
    `/search/photos?query=${query}&page=${page}`,
  );

  return response.data;
};
