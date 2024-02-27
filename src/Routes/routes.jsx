import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Page/Home';
import Login from '../Page/Login';
import Register from '../Page/Register';
import Transactions from '../Page/Transactions';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routes;
