import React, { useState } from 'react';

import * as C from './style';

import {
  FaUserAlt,
  FaMailBulk,
  FaLock
} from 'react-icons/fa';

const LoginForm = () => {
  const [isLoginForm, setLoginForm] = useState(false);

  return (
    <C.FormContainer>
      <C.FormFieldset>
        <C.FormLegend>
          {!isLoginForm ? "Cadastro" : "Login"}
        </C.FormLegend>

        {!isLoginForm ? (
          <C.InputContainer>
            <FaUserAlt />

            <C.FormInput
              placeholder="Nome"
              required
            />
          </C.InputContainer>
        ) : null}

        <C.InputContainer>
          <FaMailBulk />

          <C.FormInput
            placeholder="Email"
            type="email"
            required
          />
        </C.InputContainer>

        <C.InputContainer>
          <FaLock />

          <C.FormInput
            placeholder="Senha"
            type="password"
          />
        </C.InputContainer>

        {!isLoginForm ? (
          <C.InputContainer>
            <FaLock />

            <C.FormInput
              placeholder="Reinsira a senha"
              type="password"
            />
          </C.InputContainer>
        ) : null}

        {!isLoginForm ? (
          <C.FormOption>Já possui uma conta? Faça login clicando <span onClick={() => setLoginForm(true)}>aqui</span></C.FormOption>
        ) : (
          <C.FormOption>Não possui uma conta? Crie uma clicando <span onClick={() => setLoginForm(false)}>aqui</span></C.FormOption>
        )}

        <C.FormButton type="submit">
          {!isLoginForm ? "Criar conta" : "Fazer login"}
        </C.FormButton>
      </C.FormFieldset>
    </C.FormContainer>
  );
}

export default LoginForm;
