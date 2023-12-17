import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ErrorPage, Home, Login, Settings, Clients, Invoices,
} from './pages';
import { Layout } from './components/layout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/invoices',
        element: <Invoices />,
      },
      {
        path: '/clients',
        element: <Clients />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
