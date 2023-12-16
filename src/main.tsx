import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ErrorPage,
  Home,
  Login,
  Community,
  Gadgets,
  Electronics,
  Fashion,
  Beauty,
  Scholarships,
  Jobs,
  Services,
  Trainings,
  Food,
  Book,
  Others,
  Artworks,
  Apartments,
  Events,
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
        path: '/community',
        element: <Community />,
      },
      {
        path: '/apartments',
        element: <Apartments />,
      },
      {
        path: '/gadgets',
        element: <Gadgets />,
      },
      {
        path: '/electronics',
        element: <Electronics />,
      },
      {
        path: '/fashion',
        element: <Fashion />,
      },
      {
        path: '/beauty',
        element: <Beauty />,
      },
      {
        path: '/scholarships',
        element: <Scholarships />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/jobs',
        element: <Jobs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/trainings',
        element: <Trainings />,
      },
      {
        path: '/food',
        element: <Food />,
      },
      {
        path: '/book',
        element: <Book />,
      },
      {
        path: '/others',
        element: <Others />,
      },
      {
        path: '/artworks',
        element: <Artworks />,
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
