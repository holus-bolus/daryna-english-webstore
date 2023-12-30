import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products.tsx';
import Cart from './components/Cart.tsx';
import AboutMe from './components/AboutMe.tsx';
import NavigationMenu from './components/NavigationMenu.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavigationMenu />
          <AboutMe />
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <NavigationMenu />
          <Cart />
        </>
      ),
    },
    {
      path: '/products',
      element: (
        <>
          <NavigationMenu />
          <Products />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
