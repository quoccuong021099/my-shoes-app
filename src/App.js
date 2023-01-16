/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { isLoginFlag } from './features/Login/loginSlice';
import DefaultLayout from './layout/DefaultLayout';
import { lishHash, privateRoutes, publicRoutes, routes } from './routes';

function App() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const isLogin = useSelector(isLoginFlag) || !!localStorage.getItem('token');

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
              <Layout isLogin={isLogin}>
                <Page isLogin={isLogin} />
              </Layout>
            }
          />
        );
      })}
      {isLogin &&
        privateRoutes.map((item, index) => {
          const Page = item.component;
          const Layout =
            item.layout === null ? Fragment : item.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout isLogin={isLogin}>
                  <Page isLogin={isLogin} />
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
