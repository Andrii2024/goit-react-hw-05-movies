import React from 'react';
import s from './NotFound.module.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.error}>Page is not found... Try again!</h1>
      <Link className={s.linkhome} to="/">
        Go home!
      </Link>
    </div>
  );
};

export default NotFound;
