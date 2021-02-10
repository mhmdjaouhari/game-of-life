export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const STEP = "STEP";
export const RANDOMIZE = "RANDOMIZE";
export const CLEAR = "CLEAR";
export const TOGGLE_CELL = "TOGGLE_CELL";

export interface PlayAction {
  type: typeof PLAY;
}
export interface PauseAction {
  type: typeof PAUSE;
}
export interface StepAction {
  type: typeof STEP;
}

export interface RandomizeAction {
  type: typeof RANDOMIZE;
}
export interface ClearAction {
  type: typeof CLEAR;
}

export interface ToggleCellAction {
  type: typeof TOGGLE_CELL;
  payload: { x: number; y: number };
}

export type ActionTypes = PlayAction | PauseAction | StepAction | RandomizeAction | ClearAction | ToggleCellAction;
