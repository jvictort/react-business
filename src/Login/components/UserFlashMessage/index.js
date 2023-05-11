import React from 'react';
import FlashMessage from 'react-flash-message';

import * as C from './style';

const UserFlashMessage = () => {
  return (
    <FlashMessage duration={2500}>
      <C.Message>Usuário cadastrado com sucesso! Faça login agora mesmo.</C.Message>
    </FlashMessage>
  );
}

export default UserFlashMessage;
