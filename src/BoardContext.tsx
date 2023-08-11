import { useState, createContext } from "react";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [boardSize, setBoardSize] = useState("sm");
  // states will go here that are shared through app
  return (
    <BoardContext.Provider value={{ boardSize, setBoardSize }}>
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardProvider }