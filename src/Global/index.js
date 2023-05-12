import React from 'react';

import { Outlet } from 'react-router-dom';

import * as C from './style';

const Global = () => {
  return (
    <Outlet />
  );
}

export default Global;
