import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/AboutMe.tsx';
import Products from './components/Products.tsx';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <AboutMe /> },
    { path: '/products', element: <Products /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
