import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import GlobalLoading from './Components/Shared/GlobalLoading';
import routes from './Routes/routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <Toaster />
      <GlobalLoading />
    </QueryClientProvider>
  );
};

export default App;
