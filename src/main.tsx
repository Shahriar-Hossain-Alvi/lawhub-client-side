import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './components/Routes/Routes.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '@material-tailwind/react';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-[1440px] mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
