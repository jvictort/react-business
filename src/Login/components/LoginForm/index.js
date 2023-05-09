import React, { useState } from 'react';

import * as C from './style';

import {
  FaMailBulk,
  FaLock
} from 'react-icons/fa';

const LoginForm = ({ setLoginForm, url }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      userEmail,
      userPassword
    }

    fetch(url + '/user/login', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(response => console.log(response));
  }

  return (
    <C.FormContainer onSubmit={handleSubmit}>
      <C.FormFieldset>
        <C.FormLegend>Login</C.FormLegend>

        <C.InputContainer>
          <FaMailBulk />

          <C.FormInput
            placeholder="Email"
            type="email"
            required
            onChange={event => setUserEmail(event.target.value)}
          />
        </C.InputContainer>

        <C.InputContainer>
          <FaLock />

          <C.FormInput
            placeholder="Senha"
            type="password"
            onChange={event => setUserPassword(event.target.value)}
          />
        </C.InputContainer>

        <C.FormOption>
          Não possui uma conta? Crie uma clicando
          <span onClick={() => setLoginForm(false)}> aqui </span></C.FormOption>

        <C.FormButton type="submit">Fazer login</C.FormButton>
      </C.FormFieldset>
    </C.FormContainer>
  );
}

export default LoginForm;
