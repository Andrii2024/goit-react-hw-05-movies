import React from 'react';
import { useForm } from 'react-hook-form';

export const Form = ({ setSearchParams }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    console.log(data);
    setSearchParams(data.queryStr ? { query: data.queryStr } : {});
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('queryStr')} type="text" />
      <button>Search</button>
    </form>
  );
};
