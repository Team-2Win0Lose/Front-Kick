import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './util/router';

const RouterObject = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={RouterObject} />
  </React.StrictMode>,
);
