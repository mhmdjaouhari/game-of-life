import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCell } from "../actions";
import { GridState } from "../gridReducer";
import Cell from "./Cell";

interface Props {}

const Grid = (props: Props) => {
  const grid = useSelector<GridState, GridState["grid"]>((state) => state.grid);

  return (
    <div data-testid="grid" className="mx-auto">
      {grid.map((row, i) => (
        <div key={i} style={{ height: 19, whiteSpace: "nowrap", maxHeight: "2.5vw", }}>
          {row.map((cell, j) => (
            <Cell key={j} x={i} y={j} value={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
