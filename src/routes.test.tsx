import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import ROUTES from './constants/routes';
import TEST_ID from './constants/testId';

import routes from './routes';

const context = describe;

const setupRouterProvider = (path: string) => {
  const router = createMemoryRouter(routes, { initialEntries: [path] });

  return (
    render(
      <RouterProvider router={router} />,
    )
  );
};

describe('routes', () => {
  context('route 경로가 "/signup"일 때', () => {
    it('<SignupPage /> 렌더링', () => {
      setupRouterProvider(ROUTES.SIGNUP);

      const testId = screen.getByTestId(TEST_ID.SIGNUP.TITLE);

      expect(testId).toBeInTheDocument();
    });
  });

  context('route 경로가 "/signin"일 때', () => {
    it('<SigninPage /> 렌더링', () => {
      setupRouterProvider(ROUTES.SIGNIN);

      const testId = screen.getByTestId(TEST_ID.SIGNIN.TITLE);

      expect(testId).toBeInTheDocument();
    });
  });
});
