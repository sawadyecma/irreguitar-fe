import { AbsnoteImpl } from "irreguitar-pkg";
import { CELL_HEIGHT, CELL_WIDTH } from "../constants/cell";
import { Thread } from "../types/thread";

interface Props {
  thread: Thread;
}

export const Peg = ({ thread }: Props) => {
  return (
    <svg
      height={CELL_HEIGHT}
      width={CELL_WIDTH / 2}
      onClick={() => {
        console.log("onPegClick");
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="16"
      >
        {new AbsnoteImpl(thread.openNote).getName({ onlyPrefix: true })}
      </text>
    </svg>
  );
};
