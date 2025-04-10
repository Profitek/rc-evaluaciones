import React, { useEffect } from 'react';
import { useStore } from '../store/useStore';

const ProductTable: React.FC = () => {
  const { 
    getPaginatedProducts, 
    getTotalPages, 
    currentPage, 
    setCurrentPage,
    fetchProducts,
    isLoading,
    error
  } = useStore();

  const products = getPaginatedProducts();
  const totalPages = getTotalPages();

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (isLoading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tienda</th>
            <th>Precio Normal</th>
            <th>Precio Oferta</th>
            <th>Precio Más Bajo</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.name}</td>
              <td>{product.storeName}</td>
              <td>${product.prices.normalPrice?.toFixed(2)}</td>
              <td>${product.prices.offerPrice?.toFixed(2)}</td>
              <td>${product.prices.lowest?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0 || isLoading}
        >
          Anterior
        </button>
        <span>
          Página {currentPage + 1} de {totalPages}
        </span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1 || isLoading}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProductTable; 