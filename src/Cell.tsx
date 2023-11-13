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
  const { isGameOn, setIsGameOn } = useContext(BoardContext);

  const onClickCell = () => {
    if (!isGameOn) {
      setIsGameOn(true);
      cell.status = 'revealed';
    } else {
      cell.status = 'revealed';
    }
    if (cell.isMine) {
      setIsGameOn(false);
      console.log('game over');
    }
    
  }



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
    <StyledCell className={classNamed} onClick={onClickCell}>
      {cell.isMine ? 'X' : ''}
    </StyledCell>
  )
}


export default Cell;