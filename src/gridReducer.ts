import { Action } from "./actions";

const nCols = 40;
const nRows = 30;

export interface GridState {
  grid: number[][];
  isPlaying: boolean;
  generation: number;
}

const initialState = {
  grid: Array.from(Array(nRows), () => Array(nCols).fill(0)),
  isPlaying: false,
  generation: 0,
};

export const gridReducer = (state: GridState = initialState, action: Action) => {
  switch (action.type) {
    case "PLAY": {
      return { ...state, isPlaying: true };
    }
    case "PAUSE": {
      return { ...state, isPlaying: false };
    }
    case "STEP": {
      return { ...state, generation: state.generation + 1 };
    }
    case "RANDOMIZE": {
      return {
        ...state,
        grid: Array.from(Array(nRows), () => Array.from(Array(nCols), () => (Math.random() > 0.3 ? 0 : 1))),
        generation: 0,
      };
    }
    case "CLEAR": {
      return { ...state, grid: Array.from(Array(nRows), () => Array(nCols).fill(0)), generation: 0, isPlaying: false };
    }
    case "TOGGLE_CELL": {
      const { x, y } = action.payload;
      let nextGrid = state.grid;
      nextGrid[x][y] = nextGrid[x][y] === 0 ? 1 : 0;
      return { ...state, grid: Array.from(nextGrid) };
    }
    default:
      return state;
  }
};
