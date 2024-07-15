import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">All Products</h2>
      <ProductList />
    </Layout>
  );
};

export default Home;
