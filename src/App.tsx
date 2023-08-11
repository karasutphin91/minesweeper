import { useContext, useState, createContext } from 'react'
import './App.css'
import Header from './header'
import styled from 'styled-components'
import { Board } from './board'

const StyledBody = styled.div`
background-color: #9F86C0;
border: 6px solid #231942;
border-radius: 12px;
height: 35rem;
width: 30rem;
padding: 1rem;
`;

export type BoardSize = 'sm' | 'md' | 'lg';

interface BoardInfo {
  boardSize: BoardSize;
  setBoardSize: (newBoardSize: BoardSize) => void,
}

export const BoardContext = createContext<BoardInfo>({
  boardSize: 'sm',
  setBoardSize: (boardSize: string) => {console.log('default', boardSize)},
});

export default function App() {

  return (
    <>
      <StyledBody>
        <Header />
        <Board/>
      </StyledBody> 
    </>
  )
}

export const useBoardInfo = () => useContext(BoardContext);
