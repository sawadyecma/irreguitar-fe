export type HalfCut = "top" | "bottom";

// 中間線のスタート位置計算
const calcMidVerLineStY = (cellHeight: number, halfCut?: HalfCut) => {
  switch (halfCut) {
    case "top":
      return cellHeight / 2;
    case "bottom":
      return 0;
    default:
      return 0;
  }
};

export const calcMidVerLine = (h: number, halfCut?: HalfCut) => {
  const stY = calcMidVerLineStY(h, halfCut);
  return {
    stY: stY,
    edY: stY + (halfCut ? h / 2 : h),
  };
};

export const calcHalfCut = (
  index: number,
  items: any[]
): HalfCut | undefined => {
  if (index === 0) {
    return "top";
  }
  if (index === items.length - 1) {
    return "bottom";
  }

  return undefined;
};
