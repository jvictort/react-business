import React, { useState, useEffect } from 'react';

import UserFlashMessage from '../UserFlashMessage/index';

import * as C from './style';

import {
  FaUserAlt,
  FaMailBulk,
  FaLock
} from 'react-icons/fa';

const RegisterForm = ({ setShowMessage, setLoginForm, url }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isValidPassword, setValidPassword] = useState(false);

  useEffect(() => {
    setValidPassword(userPassword === repeatedPassword ? true : false);
  }, [userPassword, repeatedPassword]);

  const handleSubmit = event => {
    event.preventDefault();

    if(userPassword === repeatedPassword) {
      const user = {
        userName,
        userEmail,
        userPassword,
        repeatedPassword
      }

      fetch(url + '/user/add', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => response.json())
      .then(response => {
        setShowMessage(true);
        setLoginForm(true);
      });
    }
  }

  return (
    <C.FormContainer onSubmit={handleSubmit}>
      <C.FormFieldset>
        <C.FormLegend>Cadastro</C.FormLegend>

        <C.InputContainer>
          <FaUserAlt />

          <C.FormInput
            placeholder="Nome"
            required
            onChange={event => setUserName(event.target.value)}
          />
        </C.InputContainer>

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

        <C.InputContainer>
          <FaLock />

          <C.FormInput
            placeholder="Reinsira a senha"
            type="password"
            onChange={event => setRepeatedPassword(event.target.value)}
          />
        </C.InputContainer>

        {(userPassword !== '' || repeatedPassword !== '') ? (
          <C.ValidPassword color={!isValidPassword ? 'red' : 'green'}>
            {!isValidPassword ? 'As senhas estão diferentes' : 'As senhas são iguais'}
          </C.ValidPassword>
        ) : null}

        <C.FormOption>
          Já possui uma conta? Faça login clicando
          <span onClick={() => setLoginForm(true)}> aqui </span>
        </C.FormOption>

        <C.FormButton type="submit">Criar conta</C.FormButton>
      </C.FormFieldset>
    </C.FormContainer>
  );
}

export default RegisterForm;
