import React from 'react';
import Browse from './Browse';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';

const Body = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Body