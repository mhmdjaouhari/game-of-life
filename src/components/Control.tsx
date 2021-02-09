import { useSelector, useDispatch } from "react-redux";
import { pause, play, step, clear, randomize } from "../actions";
import { GridState } from "../gridReducer";
import useInterval from "../hooks/useInterval";

interface Props {}

const Control = (props: Props) => {
  const generation = useSelector<GridState, GridState["generation"]>((state) => state.generation);
  const isPlaying = useSelector<GridState, GridState["isPlaying"]>((state) => state.isPlaying);
  const dispatch = useDispatch();
  const onPlay = () => {
    dispatch(play());
  };
  const onPause = () => {
    dispatch(pause());
  };
  const onStep = () => {
    dispatch(step());
  };
  const onClear = () => {
    dispatch(clear());
  };
  const onRandomize = () => {
    dispatch(randomize());
  };
  useInterval(() => {
    if (isPlaying) onStep();
  }, 100);
  return (
    <div>
      Generation #{generation}
      <button onClick={onPlay}>PLAY</button>
      <button onClick={onPause}>PAUSE</button>
      <button onClick={onStep}>STEP</button>
      <button onClick={onClear}>CLEAR</button>
      <button onClick={onRandomize}>RANDOMIZE</button>
    </div>
  );
};

export default Control;
