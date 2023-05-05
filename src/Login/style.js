import styled from 'styled-components';

import MainBackground from './img/main-background.jpg';

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  padding: 2em;
  background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(${MainBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
