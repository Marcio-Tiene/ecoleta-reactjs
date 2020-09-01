import styled from 'styled-components';

export const Div = styled.div`
  width: 100vw;
  max-width: 565px;
  display: flex;
  margin-top: 10.51vw;

  flex-direction: column;
  @media (max-width: 640px) {
    width: 90vw;

    max-width: 90vw;
  }
`;

export const H1 = styled.h1`
  font-size: 3.4rem;

  width: 100vw;
  max-width: 565px;
  padding-bottom: 1.5vw;

  @media (max-width: 640px) {
    font-size: 3rem;

    width: 90vw;

    max-width: 90vw;
  }
`;

export const P = styled.p`
  font-size: 1.5rem;

  line-height: 2.5rem;
  width: 100vw;
  max-width: 565px;

  color: var(--title-color);
`;
