import { Cell } from "./svg/Cell";
import { Open } from "./svg/Open";

interface Props {
  fletCnt?: number;

  // undefined => 押弦なし
  // 0 => 開放弦
  markedFlets: number[];

  onClick?: (fletNum: number) => void;
}

export const ThreadBox = ({
  fletCnt = 12,
  markedFlets = [],
  onClick = undefined,
}: Props) => {
  const flets = Array.from(Array(fletCnt), (_, k) => k);

  return (
    <>
      {flets.map((f) => {
        if (f === 0) {
          return (
            <Open
              key={f}
              marked={markedFlets.includes(f)}
              onClick={onClick ? () => onClick(f) : undefined}
            />
          );
        } else {
          return (
            <Cell
              key={f}
              marked={markedFlets.includes(f)}
              onClick={onClick ? () => onClick(f) : undefined}
            />
          );
        }
      })}
    </>
  );
};
