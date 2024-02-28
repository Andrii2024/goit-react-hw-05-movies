import React from 'react';
import { Outlet } from 'react-router-dom';

const Details = () => {
  return (
    <div>
      <h3>Details</h3>
      {} <Outlet />
    </div>
  );
};

export default Details;
