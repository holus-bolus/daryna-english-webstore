import { Product } from '../types';
import React from 'react';

type SingleProductProps = {
  product: Product;
};
const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  return (
    <li>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to cart</button>
    </li>
  );
};

export default SingleProduct;
