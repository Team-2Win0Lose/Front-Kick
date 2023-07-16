// import App from '../App';
// import Login from '../pages/Login';
// import Main from '../pages/Main';
// import Signup from '../pages/Signup';
import React from 'react';
import Loading from '../pages/Loading/Loading';

const App = React.lazy(() => import('../App'));
const EmailLogin = React.lazy(() => import('../pages/Login/EmailLogin'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const Main = React.lazy(() => import('../pages/Main'));
const Signup = React.lazy(() => import('../pages/Signup'));
const Matchmaking = React.lazy(() => import('../pages/Matchmaking'));
const SelectTeam = React.lazy(() => import('../pages/SelectTeam'));
const CreateRoom = React.lazy(() => import('../pages/CreateRoom/CreateRoom'));
const RoomInfo = React.lazy(() => import('../pages/RoomInfo'));
const AddCourse = React.lazy(() => import('../pages/CreateRoom/AddCourse'));
const FindId = React.lazy(() => import('../pages/Login/Find/Id'));
const FindPassword = React.lazy(() => import('../pages/Login/Find/Password'));
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
        path: '/emaillogin',
        element: <EmailLogin />,
        label: 'EmailLogin',
      },
      {
        path: '/find/id',
        element: <FindId />,
        label: 'FindId',
      },
      {
        path: '/find/password',
        element: <FindPassword />,
        label: 'FindPassword',
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
      {
        path: '/createroom',
        element: <CreateRoom />,
        label: 'CreateRoom',
      },
      {
        path: '/roominfo',
        element: <RoomInfo />,
        label: 'RoomInfo',
      },
      {
        path: '/addcourse',
        element: <AddCourse />,
        label: 'AddCourse',
      },
    ],
  },
];
