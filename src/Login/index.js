import React, { useState } from 'react';

import * as C from './style';
import { FaBusinessTime } from 'react-icons/fa';

import RegisterForm from './components/RegisterForm/index';
import LoginForm from './components/LoginForm/index';

const apiUrl = 'http://localhost:8080';

const Login = () => {
  const [isLoginForm, setLoginForm] = useState(false);

  return (
    <C.MainContainer>
      <C.MainTitle>React Business <FaBusinessTime /></C.MainTitle>
      {!isLoginForm ? (
        <RegisterForm setLoginForm={setLoginForm} url={apiUrl}/>
      ) : (
        <LoginForm setLoginForm={setLoginForm} url={apiUrl}/>
      )}
    </C.MainContainer>
  );
}

export default Login;
