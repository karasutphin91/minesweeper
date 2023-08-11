import styled from "styled-components";
import Cell from './Cell'
import { useBoardInfo } from './App'

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
  const { boardSize } = useBoardInfo();

  const renderCells = () => {
    const row = [];
    for(let i = 0; i < 100; i++) {
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
          {renderCells()}
        </StyledSmallBoard>
      )
    } else if (boardSize === 'md') {
      return (
        <StyledMedBoard>
          {renderCells()}
        </StyledMedBoard>
      )
    } else {
      return (
        <StyledLargeBoard>
          {renderCells()}
        </StyledLargeBoard>
      )
    }
  }

  return (
    renderBoard()
  )
}