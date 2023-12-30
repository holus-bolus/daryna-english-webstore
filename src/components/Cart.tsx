import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { removeProduct, updateQuantity } from '../features/cart/cartSlice';
import NavigationMenu from './NavigationMenu.tsx'; // Removed .ts extension

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeProduct(id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleChangeQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeProduct(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="container mt-4">
      <NavigationMenu />
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div className="row mb-3" key={item.id}>
          <div className="col">
            <h3>{item.name}</h3>
            <p>
              Quantity:
              <input
                type="number"
                className="form-control"
                value={item.quantity}
                onChange={(e) =>
                  handleChangeQuantity(item.id, parseInt(e.target.value))
                }
                min="1"
              />
            </p>
            <p>Price: ₴{item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div>
        <strong>Total Price: </strong>₴{totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
