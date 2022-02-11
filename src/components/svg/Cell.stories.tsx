import { useState } from "react";
import { Cell } from "./Cell";

export default {
  title: "svg/Cell",
  component: Cell,
};

export const PressedCell = () => <Cell marked />;
export const NonPressedCell = () => <Cell />;

export const PressableCell = () => {
  const [marked, setMarked] = useState<boolean>(false);

  return <Cell marked={marked} onClick={() => setMarked(!marked)} />;
};
