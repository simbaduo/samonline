import React from 'react'
import styled from 'styled-components';

import Router from './components/Router';

const Canvas = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;


const App = () => {
  return (
    <Canvas>
      <Router />
    </Canvas>
  );
}

export default App
