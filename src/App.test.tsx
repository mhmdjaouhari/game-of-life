import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

afterEach(cleanup);

test("glider (planeur) will move across the border to the other side", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const stepButton = getByTestId("step-button");
  const pauseButton = getByTestId("pause-button");
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
  fireEvent.click(pauseButton);

  console.log(finalGliderNodesXY);

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
