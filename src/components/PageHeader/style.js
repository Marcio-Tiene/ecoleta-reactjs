import styled from 'styled-components';

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4.5%;

  @media (max-width: 520px) {
    flex-direction: column;
    line-height: 15vw;
  }
`;
export const AHeader = styled.a`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImgHeader = styled.img`
  padding-right: 15px;
`;
