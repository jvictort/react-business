import React from 'react';

import * as C from './style';

import LoginText from './components/LoginText/index';
import LoginForm from './components/LoginForm/index';

const Login = () => {
  return (
    <C.MainContainer>
      <LoginText />
      <LoginForm />
    </C.MainContainer>
  );
}

export default Login;
