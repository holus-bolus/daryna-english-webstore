import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cart/cartSlice';
import { CartItem, Product } from '../types';

type SingleProductProps = {
  product: Product;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item: CartItem = { ...product, quantity: 1 };
    dispatch(addProduct(item));
  };

  return (
    <li>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </li>
  );
};

export default SingleProduct;
