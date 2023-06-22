import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './util/router';
import GlobalStyle from './util/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './app/store';

const RouterObject = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.Suspense fallback={<div>loading...</div>}>
      <GlobalStyle />
      <RouterProvider router={RouterObject} />
    </React.Suspense>
  </Provider>,
);
