import styled from "styled-components";

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
}

const Cell = ({label}: Props) => {

  return (
    <StyledCell className="initial" onClick={() => clickMe(label)}>
      {label}
    </StyledCell>
  )
}


export default Cell