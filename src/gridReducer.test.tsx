import { gridReducer, initialState } from "./gridReducer";
import { PLAY, PAUSE, STEP, RANDOMIZE, CLEAR, TOGGLE_CELL, ActionTypes } from "./types";

describe("grid reducer", () => {
  it("should handle STEP (empty grid)", () => {
    expect(gridReducer(initialState, { type: STEP })).toEqual({ ...initialState, generation: initialState.generation + 1 });
  });

  it("should handle CLEAR", () => {
    expect(gridReducer(initialState, { type: CLEAR })).toEqual(initialState);
  });

  it("should handle TOGGLE_CELL", () => {
    const targetState = initialState;
    targetState.grid[14][14] = targetState.grid[14][14] === 0 ? 1 : 0;
    expect(gridReducer(initialState, { type: TOGGLE_CELL, payload: { x: 14, y: 14 } })).toEqual(targetState);
  });

  it("should handle PLAY", () => {
    const resultState = gridReducer(initialState, { type: PLAY });
    expect(resultState.isPlaying).toEqual(true);
  });

  it("should handle PAUSE", () => {
    const resultState = gridReducer({...initialState, isPlaying: true}, { type: PAUSE });
    expect(resultState.isPlaying).toEqual(false);
  });

});
