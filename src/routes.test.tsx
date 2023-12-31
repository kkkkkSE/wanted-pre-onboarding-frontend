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

const mockReturnValue = {
  accessToken: '',
  setAccessToken: jest.fn(),
};

jest.mock('./hooks/useAccessToken', () => () => mockReturnValue);

describe('routes', () => {
  describe('액세스 토큰이 없다면', () => {
    context('route 경로가 "/"일 때', () => {
      it('<SigninPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.HOME);

        const title = screen.getByTestId(TEST_ID.SIGNIN.TITLE);

        expect(title).toBeInTheDocument();
      });
    });

    context('route 경로가 "/signup"일 때', () => {
      it('<SignupPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.SIGNUP);

        const title = screen.getByTestId(TEST_ID.SIGNUP.TITLE);

        expect(title).toBeInTheDocument();
      });
    });

    context('route 경로가 "/signin"일 때', () => {
      it('<SigninPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.SIGNIN);

        const title = screen.getByTestId(TEST_ID.SIGNIN.TITLE);

        expect(title).toBeInTheDocument();
      });
    });

    context('route 경로가 "/todo"일 때', () => {
      it('<SigninPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.TODO);

        const title = screen.getByTestId(TEST_ID.SIGNIN.TITLE);

        expect(title).toBeInTheDocument();
      });
    });
  });

  describe('액세스 토큰이 있다면', () => {
    const accessToken = 'VALIDACCESSTOKEN';

    beforeEach(() => {
      mockReturnValue.accessToken = accessToken;
    });

    context('route 경로가 "/"일 때', () => {
      it('<TodoPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.HOME);

        const testId = screen.getByTestId(TEST_ID.TODO.TITLE);

        expect(testId).toBeInTheDocument();
      });
    });

    context('route 경로가 "/signup"일 때', () => {
      it('<TodoPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.SIGNUP);

        const title = screen.getByTestId(TEST_ID.TODO.TITLE);

        expect(title).toBeInTheDocument();
      });
    });

    context('route 경로가 "/signin"일 때', () => {
      it('<TodoPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.SIGNIN);

        const title = screen.getByTestId(TEST_ID.TODO.TITLE);

        expect(title).toBeInTheDocument();
      });
    });

    context('route 경로가 "/todo"일 때', () => {
      it('<TodoPage /> 렌더링', () => {
        setupRouterProvider(ROUTES.TODO);

        const title = screen.getByTestId(TEST_ID.TODO.TITLE);

        expect(title).toBeInTheDocument();
      });
    });
  });

  context('유효하지 않은 경로로 접근했을 때', () => {
    it('<NotFound /> 렌더링', () => {
      setupRouterProvider('/invalid-path');

      const text = screen.getByText(/404 Error/);

      expect(text).toBeInTheDocument();
    });
  });
});
