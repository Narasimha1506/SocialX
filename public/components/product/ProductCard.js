import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center">
      <img className="w-32 h-32 object-cover mb-4" src={product.image} alt={product.title} />
      <h3 className="text-lg font-bold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
