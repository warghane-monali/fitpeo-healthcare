import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import RouterPool from '@app/RouterPool';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={RouterPool} />
  </StrictMode>
)
