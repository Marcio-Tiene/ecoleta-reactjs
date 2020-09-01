import React from 'react';

import PageHeader from '../../components/PageHeader';
import Button from '../../components/Buton';
import { Wraper } from '../../components/Wraper/style';
import { Div, H1, P } from './style';

function Home() {
  return (
    <>
      <Wraper>
        <PageHeader />
        <Div>
          <H1>Seu marketplace de coleta de resíduos</H1>
          <P>
            Ajudamos pessoas a encontrarem um ponto de coleta de forma
            eficiente.
          </P>
        </Div>
        <Button />
      </Wraper>
    </>
  );
}

export default Home;
