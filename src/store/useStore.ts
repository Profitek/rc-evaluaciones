import { create } from 'zustand'
import { Product } from '../types/Product'
import { api } from '../services/api'

interface StoreState {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  totalProducts: number;
  isLoading: boolean;
  error: string | null;
  setCurrentPage: (page: number) => void;
  fetchProducts: () => Promise<void>;
  getPaginatedProducts: () => Product[];
  getTotalPages: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  products: [],
  currentPage: 0, // La API usa 0 como primera página
  itemsPerPage: 20,
  totalProducts: 0,
  isLoading: false,
  error: null,
  
  setCurrentPage: (page: number) => set({ currentPage: page }),
  
  fetchProducts: async () => {
    const state = get();
    if (state.isLoading) return;

    try {
      set({ isLoading: true, error: null });
      const response = await api.getProducts(state.currentPage, state.itemsPerPage);
      set({ 
        products: response.products,
        totalProducts: response.paging.total,
        isLoading: false 
      });
    } catch (error) {
      console.error('Error en fetchProducts:', error);
      set({ 
        error: 'Error al cargar los productos', 
        isLoading: false 
      });
    }
  },
  
  getPaginatedProducts: () => {
    const state = get();
    return state.products;
  },
  
  getTotalPages: () => {
    const state = get();
    return state.totalProducts > 0 ? Math.ceil(state.totalProducts / state.itemsPerPage) : 0;
  },
})) 