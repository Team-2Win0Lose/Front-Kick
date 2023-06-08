import App from '../App';
import Login from '../pages/Login';
import Main from '../pages/Main';


export const RouterInfo = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
        label: 'main',
      },

      {
        path: '/login',
        element: <Login />,
        label: 'Login',
      },
    ],
  },
];
