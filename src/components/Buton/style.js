import styled from 'styled-components';

export const ButtonSt = styled.a`
  width: 100%;
  max-width: 360px;
  height: 72px;

  border-radius: 8px;

  display: flex;
  align-items: center;

  margin-top: 40px;

  background-color: var(--primary-color);
  transition: 400ms;
  &:hover,
  &:focus {
    background-color: #2fb86e;
  }
`;

export const SpanSt = styled.span`
  width: 72px;
  height: 72px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  background-color: rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    background-image: url('../../assets/img/search.svg');
    width: 20px;
    height: 20px;
  }
`;

export const Img = styled.img`
  width: 32px;
`;

export const Strong = styled.strong`
  flex: 1;
  color: white;
  text-align: center;
`;
