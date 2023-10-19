import styled from "styled-components";
import { useContext, useEffect, useMemo, useState } from "react";
import { BoardContext } from "./BoardContext";

export const StyledCell = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  border: 1px solid purple;
  &.hidden {
    background-color: pink;
  }
  &.revealed {
    background-color: purple;
  }
  &.mine {
    background-color: blue;
  }
  &.flagged {
    background-color: red;
  }
`;

interface Props {
  cell: BoardCell;
  label: number;
}

const Cell = ({cell, label}: Props) => {
  const { incrementScore } = useContext(BoardContext);

  const classNamed = useMemo(() => {
    switch (cell.status) {
      case 'hidden':
        return 'hidden';
      case 'revealed':
        return 'revealed';
      case 'flagged':
        return 'flagged';
    }
  }, [cell.status]);

  return (
    <StyledCell className={classNamed} onClick={() => {
      // clickMe(label)
      incrementScore(1)
      }}>
      {label}
    </StyledCell>
  )
}


export default Cell;