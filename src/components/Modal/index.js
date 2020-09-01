import React from 'react';

import { ModalBlock, DivModal } from './style';
import { DivHeader } from '../PageHeader/style';

function Modal(props) {
  return (
    <ModalBlock active={props.active} onClick={props.onClick}>
      <DivModal>
        <h1>Hello World</h1>
      </DivModal>
    </ModalBlock>
  );
}

export default Modal;
