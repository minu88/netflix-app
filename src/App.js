import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import React from 'react';
import { Provider } from 'react-redux';
import Login from './Components/Login';
import Browse from './Components/Browse';
import appStore from './Utils/appstore';

function App() {
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
    <Provider store={appStore}>
      <RouterProvider router={router} />
      <Body />
    </Provider>
  );
}

export default App;
