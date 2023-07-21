export interface Board {
  id: number;
  name: BoardType;
  numRows: number;
  numCols: number;
  numMines: number;
}

export type BoardType = 'easy' | 'medium' | 'hard';