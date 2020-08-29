import React from 'react';
import { DivHeader, AHeader, ImgHeader } from './style';

import Logo from '../../assets/img/logo.svg';
import Login from '../../assets/img/log-in.svg';

function PageHeader() {
  return (
    <DivHeader>
      <img className='Logo' src={Logo} alt='Ecoleta logo' />
      <AHeader>
        <ImgHeader
          className='Login'
          src={Login}
          alt='cadastre um ponto de coleta'
        />
        Cadastre um ponto de coleta
      </AHeader>
    </DivHeader>
  );
}

export default PageHeader;
