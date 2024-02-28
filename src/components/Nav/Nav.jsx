import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

export const Nav = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};
