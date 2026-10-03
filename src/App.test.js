import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    addEventListener() {},
    removeEventListener() {},
  });
});

test('renders name, CV download and contact email', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Odile\s*Masengesho/);
  expect(screen.getAllByText(/Download CV/i)[0].closest('a')).toHaveAttribute('download', 'Odile CV.pdf');
  expect(screen.getAllByText('masengeshoodile@gmail.com').length).toBeGreaterThan(0);
  expect(screen.queryByText(/serious note/i)).toBeNull();
});
