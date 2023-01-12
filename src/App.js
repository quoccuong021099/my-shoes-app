/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import { lishHash, publicRoutes, routes } from './routes';

function App() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash && !lishHash.includes(hash)) {
      navigate(pathname);
    }
  }, [hash]);

  useEffect(() => {
    if (pathname === '/') {
      navigate(routes.home);
    }
  }, [pathname]);

  return (
    <Routes>
      {publicRoutes.map((item, index) => {
        const Page = item.component;
        const Layout =
          item.layout === null ? Fragment : item.layout || DefaultLayout;
        return (
          <Route
            key={index}
            path={item.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
      <Route />
    </Routes>
  );
}

export default App;
