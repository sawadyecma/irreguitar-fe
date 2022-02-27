import { useState } from "react";
import { Cell } from "./Cell";

export default {
  title: "svg/Cell",
  component: Cell,
};

export const Pressed = () => <Cell marked />;
export const NonPressed = () => <Cell />;
export const Auxiliary = () => <Cell auxiliary />;
export const halfCutTop = () => <Cell halfCut="top" />;
export const halfCutBottom = () => <Cell halfCut="bottom" />;

export const PressableCell = () => {
  const [marked, setMarked] = useState<boolean>(false);

  return <Cell marked={marked} onClick={() => setMarked(!marked)} />;
};
