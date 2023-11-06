import styled from "styled-components";
import { useContext, useMemo } from "react";
import { BoardCell, BoardContext } from "./BoardContext";

export const StyledCell = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  border: 1px solid purple;
  &.hidden {
    background-color: pink;
  }
  &.isMine {
    background-color: red;
  }
  &.revealed {
    background-color: yellow;
  }
  &.flagged {
    background-color: red;
  }
`;

interface Props {
  cell: BoardCell;
  label: number;
}

const Cell = ({cell}: Props) => {
  const { incrementScore } = useContext(BoardContext);
  const { isTiming, setIsTiming } = useContext(BoardContext);

  const classNamed = useMemo(() => {
    switch (cell.isMine) {
      case true:
        return 'isMine';
    }
    switch (cell.status) {
      case 'hidden':
        return 'hidden';
      case 'revealed':
        return 'revealed';
      case 'flagged':
        return 'flagged';
    }

  }, [cell.isMine, cell.status]);

  return (
    <StyledCell className={classNamed} onClick={() => {
      if (!isTiming) {
        setIsTiming(true);
      }
      incrementScore(1)
      }}>
      {
        cell.isMine ? 'X' : ''
      }
    </StyledCell>
  )
}


export default Cell;