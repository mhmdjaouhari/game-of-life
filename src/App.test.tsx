import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { gridReducer } from "./gridReducer";

afterEach(cleanup);

test("play and pause buttons work", async () => {
  const { getByTestId } = render(
    <Provider store={createStore(gridReducer)}>
      <App />
    </Provider>
  );

  const playButton = getByTestId("play-button");
  const pauseButton = getByTestId("pause-button");
  const generationCount = getByTestId("generation-count");

  fireEvent.click(playButton);
  await new Promise((r) => setTimeout(r, 290));
  fireEvent.click(pauseButton);

  expect(Number(generationCount.textContent)).toEqual(2);
});

test("clear button works", async () => {
  const { getByTestId } = render(
    <Provider store={createStore(gridReducer)}>
      <App />
    </Provider>
  );

  const clearButton = getByTestId("clear-button");
  const grid = getByTestId("grid");

  const cell00 = grid.children[0].children[0] as HTMLElement;

  fireEvent.click(cell00);

  expect(cell00.style.backgroundColor).toEqual("rgb(0, 0, 0)");

  fireEvent.click(clearButton);

  await new Promise((r) => setTimeout(r, 1000));

  grid.childNodes.forEach((row, i) =>
    row.childNodes.forEach((cell, j) => {
      const element = cell as HTMLElement;
      if (element != null) expect(element.style.backgroundColor).toEqual("rgb(221, 221, 221)");
    })
  );
});

test("glider (planeur) will move across the border to the other side", async () => {
  const { getByTestId } = render(
    <Provider store={createStore(gridReducer)}>
      <App />
    </Provider>
  );

  const stepButton = getByTestId("step-button");
  const grid = getByTestId("grid");
  const generationCount = getByTestId("generation-count");

  // initial coordinates of the glider
  const initialGliderNodesXY = Array<{ x: number; y: number }>();
  initialGliderNodesXY.push({ x: 1, y: 37 });
  initialGliderNodesXY.push({ x: 2, y: 38 });
  initialGliderNodesXY.push({ x: 3, y: 36 });
  initialGliderNodesXY.push({ x: 3, y: 37 });
  initialGliderNodesXY.push({ x: 3, y: 38 });

  // expected final coordinates of the glider
  const finalGliderNodesXY = Array<{ x: number; y: number }>();
  finalGliderNodesXY.push({ x: 6, y: 2 });
  finalGliderNodesXY.push({ x: 7, y: 3 });
  finalGliderNodesXY.push({ x: 8, y: 1 });
  finalGliderNodesXY.push({ x: 8, y: 2 });
  finalGliderNodesXY.push({ x: 8, y: 3 });

  // setting the glider on the grid
  initialGliderNodesXY.forEach(({ x, y }) => fireEvent.click(grid.childNodes[x].childNodes[y]));

  // run the simulation
  // n.b. here, I used stepButton instead of playButton to avoid race conditions
  for (let i = 0; i < 20; i++) fireEvent.click(stepButton);

  // check
  expect(generationCount.textContent).toEqual("20");
  grid.childNodes.forEach((row, i) =>
    row.childNodes.forEach((cell, j) => {
      const element = cell as HTMLElement;
      if (element != null)
        if (finalGliderNodesXY.filter((n) => n.x === i && n.y === j).length > 0) expect(element.style.backgroundColor).toEqual("rgb(0, 0, 0)");
        else expect(element.style.backgroundColor).toEqual("rgb(221, 221, 221)");
    })
  );
});
