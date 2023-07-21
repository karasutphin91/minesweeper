import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #E0B1CB;
  border: 4px solid #5E548E;
  margin: auto;
  height: 4rem;
  border-radius: 6px;
`;

export const StyledButton = styled.button`
  background-color: #5E548E;
  border: 2px solid #9F86C0;
  border-radius: 12px;
  color: white;
  `;


export const StyledNumberDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 4rem;
  background-color: black;
  color: white;
  font-weight: 500;
  border-radius: 6px;
`;

export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 30rem;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;  
`;