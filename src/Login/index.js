import React, { useState } from 'react';

import * as C from './style';
import { FaBusinessTime } from 'react-icons/fa';

import UserFlashMessage from './components/UserFlashMessage/index';
import RegisterForm from './components/RegisterForm/index';
import LoginForm from './components/LoginForm/index';

const apiUrl = 'http://localhost:8080';

const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isLoginForm, setLoginForm] = useState(false);

  return (
    <C.MainContainer>
      <C.MainTitle>React Business <FaBusinessTime /></C.MainTitle>

      {showMessage ? (
        <UserFlashMessage/>
      ) : null}

      {!isLoginForm ? (
        <RegisterForm setShowMessage={setShowMessage} setLoginForm={setLoginForm} url={apiUrl}/>
      ) : (
        <LoginForm setShowMessage={setShowMessage} setLoginForm={setLoginForm} url={apiUrl}/>
      )}
    </C.MainContainer>
  );
}

export default Login;
