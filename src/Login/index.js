import React from 'react';

import * as C from './style';
import { FaBusinessTime } from 'react-icons/fa';

import LoginForm from './components/LoginForm/index';

const Login = () => {
  return (
    <C.MainContainer>
      <C.MainTitle>React Business <FaBusinessTime /></C.MainTitle>
      <LoginForm />
    </C.MainContainer>
  );
}

export default Login;
