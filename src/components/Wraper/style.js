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
  background-size: 70%;
  background-position: 138% 10vw;

  @media (max-width: 940px) {
    background-position: 1800px, 1800px;

    align-items: center;
  }
`;
