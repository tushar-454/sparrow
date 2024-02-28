import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Page/Home';
import Landing from '../Page/Landing';
import Login from '../Page/Login';
import Register from '../Page/Register';
import Transactions from '../Page/Transactions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: (
          <PublicRoute>
            <Landing />
          </PublicRoute>
        ),
      },
      {
        index: '/',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: 'transactions',
        element: (
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
]);

export default routes;
