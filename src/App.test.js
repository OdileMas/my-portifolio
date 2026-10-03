import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

beforeAll(() => {
  window.scrollTo = () => {};
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('home introduces Odile and offers the CV', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Odile/);
  expect(screen.getAllByText(/Download CV/i)[0].closest('a')).toHaveAttribute('download', 'Odile CV.pdf');
});

test('NTD project has its own page', () => {
  renderAt('/projects/ntd-build-design');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('NTD Build & Design Solutions');
});

test('unknown routes show the 404 page', () => {
  renderAt('/nope');
  expect(screen.getByText(/wrong turn/i)).toBeInTheDocument();
});

test('serious note is not listed', () => {
  renderAt('/projects');
  expect(screen.queryByText(/serious note/i)).toBeNull();
});
