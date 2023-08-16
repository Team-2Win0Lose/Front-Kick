// import App from '../App';
// import Login from '../pages/Login';
// import Main from '../pages/Main';
// import Signup from '../pages/Signup';
import React from 'react';
import Loading from '../pages/Loading/Loading';
import MyAccompany from '@/pages/MyAccompany/MyAccompany';

const App = React.lazy(() => import('../App'));
const EmailLogin = React.lazy(() => import('../pages/Login/EmailLogin'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const Main = React.lazy(() => import('../pages/main'));
const Signup = React.lazy(() => import('../pages/Signup/Signup'));
const Onboarding = React.lazy(() => import('../pages/Signup/Onboarding'));
const FindAccompany = React.lazy(() => import('../pages/FindAccompany'));
const CreateRoom = React.lazy(() => import('../pages/CreateRoom/CreateRoom'));
const Myaccompany = React.lazy(
  () => import('../pages/MyAccompany/MyAccompany'),
);
const AddCourse = React.lazy(() => import('../pages/CreateRoom/AddCourse'));
const FindId = React.lazy(() => import('../pages/Login/Find/Id'));
const UserEmail = React.lazy(() => import('../pages/Login/Find/UserEmail'));
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
        path: '/find/useremail',
        element: <UserEmail />,
        label: 'UserEmail',
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
        path: '/signup/onboarding',
        element: <Onboarding />,
        label: 'Onboarding',
      },
      {
        path: '/findaccompany',
        element: <FindAccompany />,
        label: 'FindAccompany',
      },
      {
        path: '/createroom',
        element: <CreateRoom />,
        label: 'CreateRoom',
      },

      {
        path: '/myaccompany',
        element: <Myaccompany />,
        label: 'Myaccompany',
      },
      {
        path: '/addcourse',
        element: <AddCourse />,
        label: 'AddCourse',
      },
    ],
  },
];
