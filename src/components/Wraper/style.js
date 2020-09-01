import styled from 'styled-components';
import BgImg from '../../assets/img/home-background.svg';

export const Wraper = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background: url(${BgImg}) no-repeat;
  /* background-position: 35vw bottom; */
  background-position-x: 22.3vw;
  background-position-y: bottom;
`;
