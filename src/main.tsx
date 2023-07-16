import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './util/router';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from 'styled-components';

const RouterObject = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.Suspense fallback={<div>loading...</div>}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={RouterObject} />
      </ThemeProvider>
    </React.Suspense>
  </Provider>,
);
