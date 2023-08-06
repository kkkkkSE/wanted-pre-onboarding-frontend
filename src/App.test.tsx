import { render, screen } from '@testing-library/react';

import App from './App';

describe('renders learn react link', () => {
  it('render App', () => {
    render(<App />);
    
    screen.getByText(/Hello/);
  })
});
