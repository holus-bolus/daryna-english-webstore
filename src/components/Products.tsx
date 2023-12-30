import { useSelector } from 'react-redux';
import { RootState } from '../app/store.ts';
import SingleProduct from './SingleProduct.tsx';

const Products = () => {
  const products = useSelector((state: RootState) => state.products.items);
  return (
    <ul>
      {products &&
        products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      {!products && <p>no products</p>}
    </ul>
  );
};

export default Products;
