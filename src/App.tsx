import { useState } from 'react'
import './App.css'
import Header from './header'
import { StyledBoard } from './styles'
import styled from 'styled-components'
import jsonData from './boards.json'
import Cell from './Cell'

const StyledBody = styled.div`
background-color: #9F86C0;
border: 6px solid #231942;
border-radius: 12px;
height: 35rem;
width: 30rem;
padding: 1rem;
`;

function App() {


  const renderCells = () => {
    const row = [];
    for(let i = 0; i < 100; i++) {
      row.push (
        <Cell key={i} label={i} />
      )
    }
    return row;
  }

    

  return (
    <>
      <StyledBody>
        <Header />
        <StyledBoard>
          {renderCells()}
        </StyledBoard>
      </StyledBody> 
    </>
  )
}

export default App