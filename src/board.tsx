import styled from "styled-components";
import Cell from './Cell'
import { BoardContext } from './BoardContext';
import { useContext } from 'react'

export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const StyledSmallBoard = styled(StyledBoard)`
  width: 30rem;
`;

export const StyledMedBoard = styled(StyledBoard)`
  width: 35rem;
`;

export const StyledLargeBoard = styled(StyledBoard)`
  width: 40rem;
`;

export function Board() {
  const { boardSize } = useContext(BoardContext);


  const renderCells = (numCells: number, numMines: number) => {
    const row = [];
    for(let i = 0; i < numCells; i++) {
      row.push (
        <Cell key={i} label={i} />
      )
    }
    return row;
  }

  function renderBoard() {
    if (boardSize === 'sm') {
      return (
        <StyledSmallBoard>
          {renderCells(100, 5)}
        </StyledSmallBoard>
      )
    } else if (boardSize === 'md') {
      return (
        <StyledMedBoard>
          {renderCells(121, 10)}
        </StyledMedBoard>
      )
    } else {
      return (
        <StyledLargeBoard>
          {renderCells(156, 15)}
        </StyledLargeBoard>
      )
    }
  }

  return (
    renderBoard()
  )
}