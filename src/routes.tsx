import ROUTES from './constants/routes';

import PreSigninLayout from './components/PreSigninLayout';
import PostSigninLayout from './components/PostSigninLayout';

import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

const routes = [
  {
    path: ROUTES.HOME, element: <HomePage />,
  },
  {
    element: <PreSigninLayout />,
    children: [
      { path: ROUTES.SIGNIN, element: <SigninPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
    ],
  },
  {
    element: <PostSigninLayout />,
    children: [
      { path: ROUTES.TODO, element: <TodoPage /> },
    ],
  },
];

export default routes;
