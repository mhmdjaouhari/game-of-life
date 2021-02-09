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
        width: 16,
        height: 16,
        marginRight: 1,
        backgroundColor: value === 0 ? "#ddd" : "#000",
      }}></div>
  );
};

export default Cell;
