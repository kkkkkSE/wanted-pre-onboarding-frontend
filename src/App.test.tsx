import { render, screen } from '@testing-library/react';

import App from './App';

describe('renders learn react link', () => {
  it('render App', () => {
    render(<App />);

    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
});
