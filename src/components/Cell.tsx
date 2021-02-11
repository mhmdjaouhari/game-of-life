import { useSelector, useDispatch } from "react-redux";
import { toggleCell } from "../actions";
import { GridState } from "../gridReducer";

interface Props {
  x: number;
  y: number;
  value: number;
}

const Cell = (props: Props) => {
  const dispatch = useDispatch();
  const { x, y, value } = props;
  const onToggleCell = () => {
    dispatch(toggleCell(x, y));
  };
  return (
    <div
      onClick={onToggleCell}
      style={{
        display: "inline-block",
        width: 20,
        height: 18,
        maxWidth: "calc(2.5% - 1px)",
        maxHeight: "calc(2.5vw - 1px)",
        marginRight: 1,
        backgroundColor: value === 0 ? "#ddd" : "#000",
      }}></div>
  );
};

export default Cell;
