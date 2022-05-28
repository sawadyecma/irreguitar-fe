import { Button, InputNumber, Popover, Slider } from "antd";
import { AbsnoteImpl } from "irreguitar-pkg";
import { CELL_HEIGHT, CELL_WIDTH } from "../constants/cell";
import { Thread } from "../types/thread";
import "antd/dist/antd.min.css";
import { useState } from "react";

interface Props {
  thread: Thread;
  onTurn: (diff: number) => void;
}

const min = -5;
const max = 5;

export const Peg = ({ thread, onTurn }: Props) => {
  const [state, setState] = useState({ popoverVisible: false });
  const [slideValue, setSlideValue] = useState(0);

  return (
    <div
      style={{
        height: CELL_HEIGHT,
        width: CELL_WIDTH / 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Popover
        content={
          <>
            <InputNumber
              size="small"
              min={min}
              max={max}
              style={{ margin: "0 16px" }}
              value={slideValue}
              onChange={setSlideValue}
            />
            <Slider
              marks={{
                0: "±0",
                [min]: min,
                [max]: max,
              }}
              min={min}
              max={max}
              defaultValue={slideValue}
              value={slideValue}
              onChange={setSlideValue}
              included={false}
            />
            <Button
              type="text"
              size="small"
              onClick={() => {
                setState((state) => {
                  return { ...state, popoverVisible: false };
                });
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                onTurn(slideValue);
                setState((state) => {
                  return { ...state, popoverVisible: false };
                });
              }}
            >
              Apply
            </Button>
          </>
        }
        trigger="click"
        visible={state.popoverVisible}
        onVisibleChange={(popoverVisible) => {
          setState((state) => {
            return { ...state, popoverVisible };
          });
          setSlideValue(0);
        }}
        placement="topLeft"
      >
        <Button type="primary" shape="circle">
          {new AbsnoteImpl(thread.openNote).getName({ onlyPrefix: true })}
        </Button>
      </Popover>
    </div>
  );
};
