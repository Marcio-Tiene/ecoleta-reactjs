import React from 'react';
import { ButtonSt, SpanSt, Strong } from './style';

function Button(props) {
  return (
    <ButtonSt onClick={props.onClick} active={props.active}>
      <SpanSt></SpanSt>
      <Strong>Pesquisar ponto de coleta</Strong>
    </ButtonSt>
  );
}

export default Button;
