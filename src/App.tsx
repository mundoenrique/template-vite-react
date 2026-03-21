import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';

import { Approuter } from './router/Approuter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Reintentos automáticos ante errores transitorios
      retry: false,

      // Tiempo durante el cual se considera "fresco" el dato
      staleTime: 1000 * 60 * 3, // 3 min

      // Tiempo en caché cuando no hay componentes suscritos (v5)
      gcTime: 1000 * 60 * 30, // 30 min

      // Evita refetch agresivo al cambiar de pestaña
      refetchOnWindowFocus: false,

      // Sí revalida al reconectar internet
      refetchOnReconnect: true,

      // Si está stale, refetch al montar
      refetchOnMount: true,
    },
    mutations: {
      // Reintento conservador para mutaciones
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Approuter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
