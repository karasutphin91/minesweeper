import { useState, createContext, useCallback } from "react";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [boardSize, setBoardSize] = useState("sm");
  const [score, setScore] = useState(0);
  const incrementScore = useCallback((inc: number) => {setScore(
    prev => prev + inc
  )}, []);
  console.log(score);

  // New game function, can make new board information, state var currentBoard
  // cellInfo, var cellInfo = [ false, true, false, false ]; would tell whether each cell is a mine
  // separate revealed array
  // think of it kind of like redux
  // make a new board ,would generate this and change the state, then another to reveal
  // goals: randomly generate mines when new board made
  // next step will be gameplay loop



  // states will go here that are shared through app
  return (
    <BoardContext.Provider value={{ boardSize, setBoardSize, score, incrementScore }}>
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardProvider }