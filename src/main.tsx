import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './util/router';
import GlobalStyle from './util/GlobalStyle';
import Loading from './pages/Loading/Loading';
const RouterObject = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Suspense fallback={<Loading />}>
    <GlobalStyle />
    <RouterProvider router={RouterObject} />
  </React.Suspense>,
);
