import React, { useState } from 'react';

import * as C from './style';

import {
  FaMailBulk,
  FaLock
} from 'react-icons/fa';

const LoginForm = ({ setLoginForm }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
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
