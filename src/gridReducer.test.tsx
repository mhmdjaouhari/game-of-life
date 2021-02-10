import { gridReducer, getInitialState } from "./gridReducer";
import { PLAY, PAUSE, STEP, RANDOMIZE, CLEAR, TOGGLE_CELL, ActionTypes } from "./types";

describe("grid reducer", () => {
  it("should handle STEP (empty grid)", () => {
    const initialState = getInitialState();
    expect(gridReducer(getInitialState(), { type: STEP })).toEqual({ ...initialState, generation: initialState.generation + 1 });
  });

  it("should handle CLEAR", () => {
    const state = getInitialState();
    state.grid[0][0] = 1;
    expect(gridReducer(state, { type: CLEAR })).toEqual(getInitialState());
  });

  it("should handle TOGGLE_CELL", () => {
    const targetState = getInitialState();
    targetState.grid[14][14] = targetState.grid[14][14] === 0 ? 1 : 0;
    expect(gridReducer(getInitialState(), { type: TOGGLE_CELL, payload: { x: 14, y: 14 } })).toEqual(targetState);
  });

  it("should handle PLAY", () => {
    const resultState = gridReducer(getInitialState(), { type: PLAY });
    expect(resultState.isPlaying).toEqual(true);
  });

  it("should handle PAUSE", () => {
    const resultState = gridReducer({...getInitialState(), isPlaying: true}, { type: PAUSE });
    expect(resultState.isPlaying).toEqual(false);
  });
});
