import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useReveal from '../hooks/useReveal';

function Layout() {
  const { pathname } = useLocation();

  // start every page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useReveal(pathname);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
