import ROUTES from './constants/routes';

import Layout from './components/Layout';

import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { path: ROUTES.SIGNIN, element: <SigninPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      { path: ROUTES.TODO, element: <TodoPage /> },
    ],
  },
];

export default routes;
