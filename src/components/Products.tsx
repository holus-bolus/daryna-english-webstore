import { useSelector } from 'react-redux';
import { RootState } from '../app/store.ts';
import SingleProduct from './SingleProduct.tsx';
import NavigationMenu from './NavigationMenu.tsx';

const Products = () => {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <>
      <div className="container">
        <NavigationMenu />
        <div className="row">
          {products &&
            products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          {!products.length && <p>No products</p>}
        </div>
      </div>
    </>
  );
};

export default Products;
