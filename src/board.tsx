import styled from "styled-components";
import Cell from './Cell'
import { BoardContext } from './BoardContext';
import { useContext } from 'react'
import { JSX } from "react/jsx-runtime";

export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
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
  const row: JSX.Element[] = [];

  const renderCells = (numCells: number, minesNeeded: number) => {
    for(let i = 0; i < numCells; i++) {
      row.push (
        <Cell
          key={i}
          label={i}
          mine={false}
          />
      )
    }
    for (let minesPlaced = 0; minesPlaced < minesNeeded; minesPlaced++) {
      const randomCell = Math.floor(Math.random() * row.length);
      const newobj = Object.assign({}, row[randomCell]);
        newobj.mine = true;
        console.log('placed mine');
    }
    return row;
  }

// global variable for cells number per board size
// make sure it doesn't rerender the board when clicking regularly
  function renderBoard() {
    if (boardSize === 'sm') {
      return (
        <StyledSmallBoard>
          {
          renderCells(100, 50)}
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