import { render, screen, fireEvent, within } from '@testing-library/react';
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

test('home introduces Odile and offers the updated CV', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Odile/);
  expect(screen.getAllByText(/Download CV/i)[0].closest('a')).toHaveAttribute('download', 'Odile CV.pdf');
  expect(screen.getByText(/Travelis Rwanda Ltd · Fundi Mobile/i)).toBeInTheDocument();
});

test('NTD project has its own page', () => {
  renderAt('/projects/ntd-build-design');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('NTD Build & Design Solutions');
});

test('Fundi Mobile project has its own page and details', () => {
  renderAt('/projects/fundi-mobile');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Fundi Mobile (Travelis Rwanda Ltd)');
  expect(screen.getAllByText(/technicians/i).length).toBeGreaterThan(0);
});

test('clicking a skill chip opens modal with introduction and CV recommendation', () => {
  renderAt('/about');
  const djangoBtn = screen.getByRole('button', { name: /Django/i });
  fireEvent.click(djangoBtn);

  const modal = screen.getByRole('dialog');
  expect(modal).toBeInTheDocument();
  expect(within(modal).getByText(/Recommended in CV/i)).toBeInTheDocument();
  expect(within(modal).getByText(/AgriConnect/i)).toBeInTheDocument();

  // close modal
  const closeBtn = screen.getByRole('button', { name: /Close dialog/i });
  fireEvent.click(closeBtn);
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('unknown routes show the 404 page', () => {
  renderAt('/nope');
  expect(screen.getByText(/wrong turn/i)).toBeInTheDocument();
});

test('serious note is not listed', () => {
  renderAt('/projects');
  expect(screen.queryByText(/serious note/i)).toBeNull();
});
