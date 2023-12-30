import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>About me</Link>
        </li>
        <li>
          <Link to={'/cart'}>Cart</Link>
        </li>
        <li>
          <Link to={'/products'}>Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
