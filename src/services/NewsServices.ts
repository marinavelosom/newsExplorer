import axios from 'axios';

const API_KEY = '0ade3d32760245ea9eed633861c4f493';
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (country: string = 'us') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};
