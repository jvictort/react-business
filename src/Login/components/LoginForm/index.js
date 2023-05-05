import React from 'react';

import * as C from './style';

import {
  FaUserAlt,
  FaMailBulk,
  FaLock
} from 'react-icons/fa';

const LoginForm = () => {
  return (
    <C.FormContainer>
      <C.FormFieldset>
        <C.FormLegend>Cadastro</C.FormLegend>

        <C.InputContainer>
          <FaUserAlt />

          <C.FormInput
            placeholder="Nome"
            required
          />
        </C.InputContainer>

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

        <C.InputContainer>
          <FaLock />

          <C.FormInput
            placeholder="Reinsira a senha"
            type="password"
          />
        </C.InputContainer>

        <C.FormOption>Já possui uma conta? Faça login clicando <span>aqui</span></C.FormOption>

        <C.FormButton type="submit">Criar conta</C.FormButton>
      </C.FormFieldset>
    </C.FormContainer>
  );
}

export default LoginForm;
