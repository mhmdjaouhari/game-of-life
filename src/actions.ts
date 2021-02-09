export interface PlayAction {
  type: "PLAY";
}
export interface PauseAction {
  type: "PAUSE";
}
export interface StepAction {
  type: "STEP";
}

export interface RandomizeAction {
  type: "RANDOMIZE";
}
export interface ClearAction {
  type: "CLEAR";
}

export interface ToggleCellAction {
  type: "TOGGLE_CELL";
  payload: { x: number; y: number };
}

export type Action = PlayAction | PauseAction | StepAction | RandomizeAction | ClearAction | ToggleCellAction;

export const play = (): Action => ({
  type: "PLAY",
});

export const pause = (): Action => ({
  type: "PAUSE",
});

export const step = (): Action => ({
  type: "STEP",
});

export const randomize = (): Action => ({
  type: "RANDOMIZE",
});

export const clear = (): Action => ({
  type: "CLEAR",
});

export const toggleCell = (x: number, y: number): Action => ({
  type: "TOGGLE_CELL",
  payload: { x, y },
});
