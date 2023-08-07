import React from 'react';

import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Reset } from 'styled-reset';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';

function main() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const router = createBrowserRouter(routes, {
    basename: process.env.PUBLIC_URL,
  });

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

main();
