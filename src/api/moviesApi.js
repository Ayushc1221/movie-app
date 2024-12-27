import axios from 'axios';

const BASE_URL = 'https://www.freetestapi.com/api/v1/movies';

// Function to fetch movies from the API
export const fetchMovies = async () => {
  try {
    const response = await axios.get(BASE_URL);
    
    // Optional: Ensure the data format matches expectations
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid API response format');
    }

    return response.data; // Return the movie data
  } catch (error) {
    console.error('Error fetching movies:', error.message);

    // Handle specific errors based on status code or type
    if (error.response) {
      // Server responded with a status code other than 2xx
      throw new Error(
        `API Error: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network Error: No response from server');
    } else {
      // Other types of errors
      throw new Error(`Unexpected Error: ${error.message}`);
    }
  }
};
