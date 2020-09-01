import styled, { css } from 'styled-components';

const ModalBlock = styled.div`
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
export default ModalBlock;
