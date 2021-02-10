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
      Generation #<span data-testid="generation-count">{generation}</span>
      <button data-testid="play-button" onClick={onPlay}>PLAY</button>
      <button data-testid="pause-button" onClick={onPause}>PAUSE</button>
      <button data-testid="step-button" onClick={onStep}>STEP</button>
      <button data-testid="clear-button" onClick={onClear}>CLEAR</button>
      <button data-testid="randomize-button" onClick={onRandomize}>RANDOMIZE</button>
    </div>
  );
};

export default Control;
