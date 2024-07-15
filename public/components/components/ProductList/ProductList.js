import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from './ProductCard';
import { fetchProducts } from '../utils/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMoreProducts = async () => {
    try {
      const newProducts = await fetchProducts('all', page);
      setProducts([...products, ...newProducts]);
      setPage(page + 1);
      if (newProducts.length === 0) setHasMore(false);
    } catch (error) {
      console.error('Error loading more products:', error);
    }
  };

  useEffect(() => {
    loadMoreProducts();
  }, []);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={loadMoreProducts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
