import React from 'react';

import ModalBlock from './style';

function Modal(props) {
  return (
    <ModalBlock active={props.active} onClick={props.onClick}>
      <h1>Hello World</h1>
    </ModalBlock>
  );
}

export default Modal;
