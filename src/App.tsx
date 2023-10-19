import './App.css'
import Header from './header'
import styled from 'styled-components'
import { Board } from './board'
import { useState, useContext } from 'react'
import { BoardContext } from './BoardContext';


const StyledBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #9F86C0;
border: 6px solid #231942;
border-radius: 12px;
padding: 1rem;
`;

const StyledButton = styled.button`
  background-color: #5E548E;
  border: 2px solid #9F86C0;
  border-radius: 12px;
  color: white;
`;

const App = () => {
  const { boardSize, setBoardSize } = useContext(BoardContext);
  const [gameState, setGameState] = useState('playing');

  const changeSize = (size) => {
    if (size !== boardSize) {
      setBoardSize(size);
      console.log(size);
    } else {
      console.log('same size');
    }
  }

  return (
    <>
      <StyledBody>
        <div>
          <StyledButton onClick={() => changeSize('sm')}>SM</StyledButton>
          <StyledButton onClick={() => changeSize('md')}>MED</StyledButton>
          <StyledButton onClick={() => changeSize('lg')}>LG</StyledButton>
        </div>
        <Header />
        <Board/>
      </StyledBody>
    </>
  )
}

export default App;