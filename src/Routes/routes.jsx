import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import Home from '../Page/Home';
import Login from '../Page/Login';
import Register from '../Page/Register';

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
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default routes;
