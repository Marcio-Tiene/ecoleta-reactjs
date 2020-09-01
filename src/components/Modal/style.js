import styled, { css } from 'styled-components';

export const ModalBlock = styled.div`
  position: absolute;
  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  top: 0;
  background-color: Rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  opacity: 0;

  transition: 200ms linear;

  ${({ active }) =>
    active &&
    css`
      z-index: 1;
      opacity: 1;
    `}
`;
export const DivModal = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 20vw;
  background-color: var(--bg-color);
  border-radius: 10px;
  box-shadow: 0px 15px 15px 10px rgba(0, 0, 0, 0.6);
`;
