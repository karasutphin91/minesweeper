import { useState, createContext, useCallback, useEffect } from "react";

const BoardContext = createContext();

export type BoardCell = {
  isMine: boolean;
  status: 'hidden' | 'revealed' | 'flagged';
  neighbors: number;
  // remove eventually ^ will probably be realtime
}

type BoardType = 'easy' | 'medium' | 'hard';

const generateBoard = (numCells: number) => {
  const arrayBc: BoardCell[] = [];
  for(let i = 0; i < numCells; i++) {
    arrayBc.push (
      {
        isMine: Math.random() > .5 ? true : false,
        status: Math.random() > .5 ? 'hidden' : 'flagged',
        neighbors: 0,
      }
    )
  }
  // for (let minesPlaced = 0; minesPlaced < minesNeeded; minesPlaced++) {
  //   const randomCell = Math.floor(Math.random() * arrayBc.length);
  //   const newobj = Object.assign({}, arrayBc[randomCell]);
  //     newobj.mine = true;
  //     console.log('placed mine');
  // }
  return arrayBc;
}

const BoardProvider = ({ children }) => {
  const [boardType, setBoardType] = useState<BoardType>('easy');
  const [score, setScore] = useState(0);
  const incrementScore = useCallback((inc: number) => {setScore(
    prev => prev + inc
  )}, []);
  console.log(score);
  const [boardCells, setBoardCells] = useState<BoardCell[]>([]);

  useEffect(() => {
    switch (boardType) {
      // TODO eventually want set boardcells to just get 'easy' or w/e
      case 'easy':
        setBoardCells(generateBoard(81, 10));
        break;
      case 'medium':
        setBoardCells(generateBoard(121, 15));
        break;
      case 'hard':
        setBoardCells(generateBoard(156, 20));
        break;
    }
  }, [boardType]);
  console.log(boardCells);

  // useEffect(() => {

  //   console.log('board size changed');
  // }[BoardType])


  // states will go here that are shared through app
  return (
    <BoardContext.Provider value={{ boardCells, boardType, setBoardType, score, incrementScore }}>
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardProvider }

  // New game function, can make new board information, state var currentBoard
  // cellInfo, var cellInfo = [ false, true, false, false ]; would tell whether each cell is a mine
  // separate revealed array
  // think of it kind of like redux
  // make a new board ,would generate this and change the state, then another to reveal
  // goals: randomly generate mines when new board made
  // next step will be gameplay loop

