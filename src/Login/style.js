import styled from 'styled-components';

import MainBackground from './img/main-background.jpg';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  padding: 2em;
  background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(${MainBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media(max-width: 420px) {
    padding: 1em;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2.3em;
  color: white;

  @media(max-width: 420px) {
    font-size: 2em;
  }
`;
