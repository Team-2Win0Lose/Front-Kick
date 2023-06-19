// import App from '../App';
// import Login from '../pages/Login';
// import Main from '../pages/Main';
// import Signup from '../pages/Signup';
import React from 'react';
import Loading from '../pages/Loading/Loading';
import SelectTeam from '../pages/SelectTeam';

const App = React.lazy(() => import('../App'));
const Login = React.lazy(() => import('../pages/Login'));
const Main = React.lazy(() => import('../pages/Main'));
const Signup = React.lazy(() => import('../pages/Signup'));
const Matchmaking = React.lazy(() => import('../pages/Matchmaking'));

export const RouterInfo = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Loading />,
        label: 'loading',
      },
      {
        path: '/home',
        element: <Main />,
        label: 'main',
      },
      {
        path: '/login',
        element: <Login />,
        label: 'Login',
      },

      {
        path: '/signup',
        element: <Signup />,
        label: 'Signup',
      },
      {
        path: '/selectteam',
        element: <SelectTeam />,
        label: 'SelectTeam',
      },

      {
        path: '/matchmaking',
        element: <Matchmaking />,
        label: 'Matchmaking',
      },
    ],
  },
];
