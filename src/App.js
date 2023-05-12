import React from 'react';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';

import Login from './Login/index';
import Global from './Global/index';
import Home from './Home/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Global />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
