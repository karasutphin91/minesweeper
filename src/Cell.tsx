import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { BoardContext } from "./BoardContext";

export const StyledCell = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  border: 1px solid purple;
  &.initial {
    background-color: pink;
  }
  &.revealed {
    background-color: purple;
  }
  &.mine {
    background-color: blue;
  }
`;

interface Props {
  label: number;
  mine: boolean;
}

const Cell = ({label, mine}: Props) => {
  const { incrementScore } = useContext(BoardContext);
  const [isMine, setIsMine] = useState(mine);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);
  
  useEffect(() => {
    setIsMine(mine);
  }, [mine]);

  function clickMe(label: number) {
    const e = document.getElementsByClassName("initial");
    e[label].classList.add("revealed");
    setIsRevealed(true);
    if (isMine) {
      e[label].classList.add("mine");
    }
  }




  return (
    <StyledCell className="initial" onClick={() => {
      clickMe(label)
      incrementScore(1)
      }}>
      {label}
    </StyledCell>
  )
}


export default Cell;