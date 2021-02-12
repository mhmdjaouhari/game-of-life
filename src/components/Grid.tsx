import { useSelector } from "react-redux";
import { GridState } from "../gridReducer";
import Cell from "./Cell";

interface Props {}

const Grid = (props: Props) => {
  const grid = useSelector((state: GridState) => state.grid);

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
