import axios from 'axios';

const API_URL = 'https://real-time-amazon-data.p.rapidapi.com/products';

export const fetchProducts = async (category, page = 1) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      params: { category, page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
