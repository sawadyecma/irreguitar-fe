import {
  CELL_COLOR,
  CELL_HEIGHT,
  CELL_WEIGHT,
  CELL_WIDTH,
  PRESS_CIRCLE_COLOR,
  PRESS_CIRCLE_RADIUS,
  THREAD_COLOR,
  THREAD_WEIGHT,
} from "../../constants/cell";

interface Props {
  marked?: boolean;
  onClick?: () => void;
  halfCut?: "top" | "bottom";
  auxiliary?: boolean;
}

export const Cell = ({
  marked = false,
  onClick = undefined,
  halfCut,
  auxiliary = false,
}: Props) => {
  const w = CELL_WIDTH;
  const h = CELL_HEIGHT;
  const cw = CELL_WEIGHT;
  const cc = CELL_COLOR;

  const tw = THREAD_WEIGHT;
  const tc = THREAD_COLOR;

  const pr = PRESS_CIRCLE_RADIUS;
  const pc = PRESS_CIRCLE_COLOR;

  return (
    <svg width={w} height={h} onClick={onClick}>
      {/* 補助線 */}
      {auxiliary && (
        <>
          {/* 上横線 */}
          <line x1={0} y1={0} x2={w} y2={0} strokeWidth={cw} stroke={cc} />
          {/* 下横線 */}
          <line x1={0} y1={h} x2={w} y2={h} strokeWidth={cw} stroke={cc} />
        </>
      )}

      {/* 中縦線 = フレット */}
      <line x1={w / 2} y1={0} x2={w / 2} y2={h} strokeWidth={tw} stroke={tc} />
      {/* 中横線 = 弦 */}
      <line x1={0} y1={h / 2} x2={w} y2={h / 2} strokeWidth={tw} stroke={tc} />
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
