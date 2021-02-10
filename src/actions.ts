import { PLAY, PAUSE, STEP, RANDOMIZE, CLEAR, TOGGLE_CELL, ActionTypes } from "./types";

export const play = (): ActionTypes => ({
  type: PLAY,
});

export const pause = (): ActionTypes => ({
  type: PAUSE,
});

export const step = (): ActionTypes => ({
  type: STEP,
});

export const randomize = (): ActionTypes => ({
  type: RANDOMIZE,
});

export const clear = (): ActionTypes => ({
  type: CLEAR,
});

export const toggleCell = (x: number, y: number): ActionTypes => ({
  type: TOGGLE_CELL,
  payload: { x, y },
});
