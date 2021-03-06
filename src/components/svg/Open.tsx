import {
  CELL_COLOR,
  CELL_HEIGHT,
  CELL_WEIGHT,
  CELL_WIDTH,
  OPEN_WIDTH,
  PRESS_CIRCLE_COLOR,
  PRESS_CIRCLE_RADIUS,
  THREAD_COLOR,
  THREAD_WEIGHT,
} from "../../constants/cell";
import { calcMidVerLine, HalfCut } from "./modules";

interface Props {
  marked?: Boolean;
  onClick?: () => void;
  halfCut?: HalfCut;
  auxiliary?: boolean;
}

export const Open = ({
  marked = false,
  onClick = undefined,
  halfCut,
  auxiliary = false,
}: Props) => {
  const w = CELL_WIDTH / 2;
  const h = CELL_HEIGHT;
  const cw = CELL_WEIGHT;
  const cc = CELL_COLOR;

  const tw = THREAD_WEIGHT;
  const tc = THREAD_COLOR;

  const pr = PRESS_CIRCLE_RADIUS;
  const pc = PRESS_CIRCLE_COLOR;

  const ow = OPEN_WIDTH;

  const midVerLine = calcMidVerLine(h, halfCut);
  return (
    <svg width={w} height={h} onClick={onClick}>
      {/* 補助線 */}
      {auxiliary && (
        <>
          {/* 上横線 */}
          <line
            x1={w / 2 - ow}
            y1={0}
            x2={w}
            y2={0}
            strokeWidth={cw}
            stroke={cc}
          />
          {/* 下横線 */}
          <line
            x1={w / 2 - ow}
            y1={h}
            x2={w}
            y2={h}
            strokeWidth={cw}
            stroke={cc}
          />
        </>
      )}
      {/* 中縦線2つ */}
      <line
        x1={w / 2 - ow}
        y1={midVerLine.stY}
        x2={w / 2 - ow}
        y2={midVerLine.edY}
        strokeWidth={tw}
        stroke={tc}
      />
      <line
        x1={w / 2 + ow}
        y1={midVerLine.stY}
        x2={w / 2 + ow}
        y2={midVerLine.edY}
        strokeWidth={tw}
        stroke={tc}
      />
      {/* 中横線 = 弦 */}
      <line
        x1={w / 2 - ow}
        y1={h / 2}
        x2={w}
        y2={h / 2}
        strokeWidth={tw}
        stroke={tc}
      />
      {marked && (
        <circle
          cx={w / 2}
          cy={h / 2}
          r={pr}
          strokeWidth={cw}
          stroke={pc}
          fill={pc}
        />
      )}
    </svg>
  );
};
