import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './util/router';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from 'styled-components';
import GlobalModal from './components/Modal/GlobalModal';
import initMockAPI from './mocks';
import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from 'styled-components';
const RouterObject = createBrowserRouter(RouterInfo);
const Loaders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.Suspense
      fallback={
        <Loaders>
          <PacmanLoader color='#1f1f45' size='50' />
        </Loaders>
      }
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalModal />
        <RouterProvider router={RouterObject} />
      </ThemeProvider>
    </React.Suspense>
  </Provider>,
);
