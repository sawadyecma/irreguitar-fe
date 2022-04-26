import { Button, Popover } from "antd";
import { AbsnoteImpl } from "irreguitar-pkg";
import { CELL_HEIGHT, CELL_WIDTH } from "../constants/cell";
import { Thread } from "../types/thread";
import "antd/dist/antd.css";
import { useState } from "react";

interface Props {
  thread: Thread;
}

export const Peg = ({ thread }: Props) => {
  const [state, setState] = useState({ popoverVisible: false });
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
        content={<a>Close</a>}
        title="Title"
        trigger="click"
        visible={state.popoverVisible}
        onVisibleChange={(popoverVisible) => {
          setState((state) => {
            return { ...state, popoverVisible };
          });
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
