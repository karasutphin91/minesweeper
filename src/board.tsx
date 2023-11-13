import styled from "styled-components";
import Cell from './Cell'
import { BoardCell, BoardContext } from './BoardContext';
import { useContext, useMemo } from 'react'

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
  const { boardType, boardCells } = useContext(BoardContext);

  const BoardStyle = useMemo(() => {
    switch (boardType) {
      case 'easy':
        return StyledSmallBoard;
      case 'medium':
        return StyledMedBoard;
      case 'hard':
        return StyledLargeBoard;
    }
  }
  , [boardType]);

  const renderCells = (boardCells: BoardCell[]) => {
    return boardCells.map((cell, i) => (
      <Cell
        key={i}
        label={i}
        cell={cell}
        />
      )
    )
  }

  return (
    <BoardStyle>
    {renderCells(boardCells)}
  </BoardStyle>
  )
}