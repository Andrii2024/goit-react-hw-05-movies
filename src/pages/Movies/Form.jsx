import React from 'react';
import { useForm } from 'react-hook-form';

import s from './Movies.module.css';

export const Form = ({ setSearchParams }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setSearchParams(data.searchTerm);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={s.input} {...register('searchTerm')} />
      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
};
