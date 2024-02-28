import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import s from './Nav/Nav.module.css';
export const Layout = () => {
  return (
    <div className={s.wrapperDiv}>
      <header className={s.wrapper}>
        <Nav />
      </header>
      <div className={s.outletWrapper}>
        <Suspense fallback={<h1>Load page....</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
