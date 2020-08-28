import React from 'react';
import styled from 'styled-components';

const Hello = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <Hello>
      <h1>Helo World</h1>
    </Hello>
  );
}

export default Home;
