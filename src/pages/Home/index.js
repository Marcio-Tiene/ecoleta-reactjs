import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import { Wraper } from '../../components/Wraper/style';
import { Div, H1, P } from './style';
import Modal from '../../components/Modal';

function Home() {
  const [active, seActive] = useState(true);
  function HandleModal() {
    seActive((OldActive) => !OldActive);
  }

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
        <Button onClick={HandleModal} />
      </Wraper>
      <Modal active={active} onClick={HandleModal}></Modal>
    </>
  );
}

export default Home;
