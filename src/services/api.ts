import { ApiResponse } from '../types/Product';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const api = {
  getProducts: async (page: number = 0, size: number = 20): Promise<ApiResponse> => {
    try {
      console.log(`${API_BASE_URL}/pricing/v1/products?page=${page}&size=${size}&apikey=${API_KEY}`);
      const response = await fetch(`${API_BASE_URL}/pricing/v1/products?page=${page}&size=${size}&apikey=${API_KEY}`, {});

      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }

      return response.json();
    } catch (error) {
      console.error('Error en la petición:', error);
      throw error;
    }
  }
}; 