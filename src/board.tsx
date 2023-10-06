import styled from "styled-components";
import Cell from './Cell'
import { BoardContext } from './BoardContext';
import { useContext } from 'react'

export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* TODO - add these as classnames instead */
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
  const row = [];

  const renderCells = (numCells: number, minesNeeded: number) => {
    for(let i = 0; i < numCells; i++) {
      row.push (
        <Cell
          key={i}
          label={i}
          isHidden={true}
          isMine={false}
          isFlagged={false}
          isRevealed={false}
          />
      )
    }
    return row;
  }

  // function placeMines(row: [], minesNeeded: number) {
  //   let minesPlaced = 0;
  //   while (minesPlaced < minesNeeded) {
  //     const randomCell = Math.floor(Math.random() * row.length);
  //     if(randomCell.isMine === false) {
  //       randomCell.isMine = true;
  //       minesPlaced++;
  //       console.log('placed mine');
  //     }
  //   }
  // }

  function renderBoard() {
    if (boardSize === 'sm') {
      return (
        <StyledSmallBoard>
          {renderCells(100, 50)}
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