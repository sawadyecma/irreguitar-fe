import { CELL_HEIGHT, CELL_WEIGHT, CELL_WIDTH } from "../constants/cell";
import { Thread } from "../types/thread";
import { calcHalfCut } from "./svg/modules";
import { ThreadBox } from "./ThreadBox";

interface Props {
  threads: Thread[];
  fletCnt?: number;
  onClick?: (thNum: number, flet: number) => void;
}

export const GuitarBox = ({
  threads,
  fletCnt = 15,
  onClick = undefined,
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
            }}
          >
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
                {
                  { 6: "E", 5: "A", 4: "D", 3: "G", 2: "B", 1: "E" }[
                    thread.thNum
                  ]
                }
              </text>
            </svg>
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
