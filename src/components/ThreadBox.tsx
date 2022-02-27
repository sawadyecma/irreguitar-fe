import { Cell } from "./svg/Cell";
import { calcHalfCut, HalfCut } from "./svg/modules";
import { Open } from "./svg/Open";

interface Props {
  fletCnt?: number;

  // undefined => 押弦なし
  // 0 => 開放弦
  markedFlets: number[];

  onClick?: (fletNum: number) => void;

  halfCut?: HalfCut;
}

export const ThreadBox = ({
  fletCnt = 12,
  markedFlets = [],
  onClick = undefined,
  halfCut,
}: Props) => {
  const flets = Array.from(Array(fletCnt), (_, k) => k);

  return (
    <>
      {flets.map((f, index) => {
        if (f === 0) {
          return (
            <Open
              key={f}
              marked={markedFlets.includes(f)}
              onClick={onClick ? () => onClick(f) : undefined}
              halfCut={halfCut}
            />
          );
        } else {
          return (
            <Cell
              key={f}
              marked={markedFlets.includes(f)}
              onClick={onClick ? () => onClick(f) : undefined}
              halfCut={halfCut}
            />
          );
        }
      })}
    </>
  );
};
