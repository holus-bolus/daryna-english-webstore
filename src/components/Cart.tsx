import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { removeProduct, updateQuantity } from '../features/cart/cartSlice'; // Removed .ts extension

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeProduct(id));
  };

  const handleChangeQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeProduct(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleChangeQuantity(item.id, parseInt(e.target.value))
              }
              min="1"
            />
          </p>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
