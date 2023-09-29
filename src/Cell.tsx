import styled from "styled-components";
import { useContext, useState } from "react";
import { BoardContext } from "./BoardContext";

export const StyledCell = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  border: 1px solid purple;
  &.initial {
    background-color: pink;
  }
  &.clicked {
    background-color: purple;
  }

`;
function clickMe(label: number) {
  const e = document.getElementsByClassName("initial");
  e[label].classList.add("clicked");
}

interface Props {
  label: number;
  isMine?: boolean;
  isClicked?: boolean;
}

const Cell = ({label}: Props) => {
  const { incrementScore } = useContext(BoardContext);
  const [isMine, setIsMine] = useState(false);

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