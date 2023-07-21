import styled from "styled-components";

export const StyledCell = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  border: 1px solid purple;
  background-color: pink;
`;

interface Props {
  label: number;
}

const Cell = ({label}: Props) => {
  return (
    <StyledCell>
      {label}
    </StyledCell>
  )
}


export default Cell