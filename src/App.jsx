import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import GlobalLoading from './Components/Shared/GlobalLoading';
import AuthProvider from './Context/AuthProvider';
import routes from './Routes/routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
      <Toaster />
      <GlobalLoading />
    </QueryClientProvider>
  );
};

export default App;
