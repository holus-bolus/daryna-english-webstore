import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products.tsx';
import Cart from './components/Cart.tsx';
import AboutMe from './components/AboutMe.tsx';
import Home from './components/Home.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <AboutMe />
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <Cart />
        </>
      ),
    },
    {
      path: '/products',
      element: (
        <>
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
