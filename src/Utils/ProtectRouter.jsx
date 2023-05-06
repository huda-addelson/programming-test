import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRouter = () => {
  const login = JSON.parse(localStorage.getItem('user'));

  return login !== null ? <Outlet /> : <Navigate to={'/login'} />;
};

export { ProtectRouter };
