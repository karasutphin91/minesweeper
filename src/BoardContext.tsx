import { useState, createContext, useCallback, useEffect } from "react";
import { BoardType } from "./types"

const BoardContext = createContext();
const DIFFICULTY_MAP = {'easy': [81, 10], 'medium': [121, 15], 'hard': [156, 20]}

export type BoardCell = {
  isMine: boolean;
  status: 'hidden' | 'revealed' | 'flagged';
  neighbors: number;
  // remove eventually ^ will probably be realtime
}

// export type BoardType = 'easy' | 'medium' | 'hard';

const generateBoard = (numCells: number) => {
  const arrayBc: BoardCell[] = [];
  for(let i = 0; i < numCells; i++) {
    arrayBc.push (
      {
        isMine: false,
        status: 'revealed',
        neighbors: 0,
      }
    )
  }
  for (let minesPlaced = 0; minesPlaced < 11; minesPlaced++) {
    const randomCell = Math.floor(Math.random() * arrayBc.length);
    console.log('rando', randomCell);
    arrayBc[randomCell].isMine = true;
  }
  return arrayBc;
}


const BoardProvider = ({ children }) => {
  const [boardType, setBoardType] = useState<BoardType>('easy');
  const [score, setScore] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [time, setTime] = useState(0);
  const incrementScore = useCallback((inc: number) => {setScore(
    prev => prev + inc
  )}, []);
  const [boardCells, setBoardCells] = useState<BoardCell[]>([]);

  useEffect(() => { 
    let interval: number | undefined;
    if (isTiming) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      window.clearInterval(interval);
    }
  }, [isTiming]);

  // function getCellsForDifficulty() {
  // }

  // function timeUp() {
  //   if(!isTiming) {
  //     setIsTiming(true);
  //   }
  // }

  useEffect(() => {
    switch (boardType) {
      // TODO eventually want set boardcells to just get 'easy' or w/e
      case 'easy':
        setBoardCells(generateBoard(DIFFICULTY_MAP.easy[0], DIFFICULTY_MAP.easy[1]));
        break;
      case 'medium':
        setBoardCells(generateBoard(DIFFICULTY_MAP.medium[0], DIFFICULTY_MAP.medium[1]));
        break;
      case 'hard':
        setBoardCells(generateBoard(DIFFICULTY_MAP.hard[0], DIFFICULTY_MAP.hard[1]));
        break;
    }
  }, [boardType]);

  // useEffect(() => {

  //   console.log('board size changed');
  // }[BoardType])

  function resetGame() {
    setScore(0);
    // every time player does move, increment something by 1, move count
    // if move count is gets set to 0, then regenerate board
    setIsTiming(false);
  }


  // states will go here that are shared through app
  return (
    <BoardContext.Provider value={{ boardCells, boardType, setBoardType, score, incrementScore, resetGame, time, isTiming, setIsTiming }}>
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
