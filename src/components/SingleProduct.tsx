import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cart/cartSlice';
import { CartItem, Product } from '../types';
import './SingleProduct.css';

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
    <div className="col mb-4">
      <div className="card h-100">
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
          style={{ height: '600px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Price:</strong> ₴{product.price}
          </p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
