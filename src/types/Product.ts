export interface Product {
  productId: number;
  storeId: number;
  storeName: string;
  name: string;
  sku: string;
  brand: string;
  model: string;
  url: string;
  status: string;
  created: string;
  updated: string;
  extracted: string;
  prices: {
    lowest: number;
    normalPrice: number;
    offerPrice: number;
  };
}

export interface ApiResponse {
  paging: {
    total: number;
    pages: number;
    size: number;
    currentPage: number;
  };
  products: Product[];
} 