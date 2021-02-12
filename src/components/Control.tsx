import { useSelector, useDispatch } from "react-redux";
import { pause, play, step, clear, randomize } from "../actions";
import { GridState } from "../gridReducer";
import useInterval from "../hooks/useInterval";
import { Button, ButtonGroup, Card } from "react-bootstrap";

interface Props {}

const Control = (props: Props) => {
  const generation = useSelector((state: GridState) => state.generation);
  const isPlaying = useSelector((state: GridState) => state.isPlaying);
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
    <Card className="mb-2" bg="light">
      <Card.Body>
        <ButtonGroup className="mr-2 mb-1">
          <Button variant="success" size="sm" data-testid="play-button" onClick={onPlay}>
            Play
          </Button>
          <Button variant="secondary" size="sm" data-testid="pause-button" onClick={onPause}>
            Pause
          </Button>
          <Button variant="dark" size="sm" data-testid="step-button" onClick={onStep}>
            Step
          </Button>
        </ButtonGroup>
        <ButtonGroup className="mr-2 mb-1">
          <Button variant="danger" size="sm" data-testid="clear-button" onClick={onClear}>
            Clear
          </Button>
          <Button variant="warning" size="sm" data-testid="randomize-button" onClick={onRandomize}>
            Randomize
          </Button>
        </ButtonGroup>
        <Card.Title className="mb-0 mt-2">
          <i>
            Generation #<span data-testid="generation-count">{generation}</span>
          </i>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Control;
