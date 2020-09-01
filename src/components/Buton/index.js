import React from 'react';
import { ButtonSt, SpanSt, Img, Strong } from './style';
import Search from '../../assets/img/search.svg';

function Button() {
  return (
    <ButtonSt>
      <SpanSt>
        <Img src={Search} alt='pesquisar' />{' '}
      </SpanSt>
      <Strong>Pesquisar ponto de coleta</Strong>
    </ButtonSt>
  );
}

export default Button;
