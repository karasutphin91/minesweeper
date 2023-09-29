import { useState, createContext, useCallback } from "react";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [boardSize, setBoardSize] = useState("sm");
  const [score, setScore] = useState(0);
  const incrementScore = useCallback((inc: number) => {setScore(
    prev => prev + inc
  )}, []);
  console.log(score);

  // states will go here that are shared through app
  return (
    <BoardContext.Provider value={{ boardSize, setBoardSize, score, incrementScore }}>
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardProvider }