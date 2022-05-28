import { CELL_HEIGHT, CELL_WEIGHT } from "../constants/cell";
import { Thread } from "../types/thread";
import { Peg } from "./Peg";
import { calcHalfCut } from "./svg/modules";
import { ThreadBox } from "./ThreadBox";

interface Props {
  threads: Thread[];
  fletCnt?: number;
  onClick?: (thNum: number, flet: number) => void;
  onTurn?: (thNum: number, diff: number) => void;
}

export const GuitarBox = ({
  threads,
  fletCnt = 15,
  onClick = undefined,
  onTurn = undefined,
}: Props) => {
  return (
    <div
      style={{
        whiteSpace: "nowrap",
      }}
    >
      {threads.map((thread, index) => {
        return (
          <div
            key={thread.thNum}
            style={{
              height: CELL_HEIGHT - CELL_WEIGHT / 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Peg
              thread={thread}
              onTurn={(diff) =>
                onTurn ? onTurn(thread.thNum, diff) : undefined
              }
            />
            <ThreadBox
              fletCnt={fletCnt}
              markedFlets={thread.markedFlets}
              onClick={
                onClick ? (flet) => onClick(thread.thNum, flet) : undefined
              }
              halfCut={calcHalfCut(index, threads)}
            />
          </div>
        );
      })}
    </div>
  );
};
