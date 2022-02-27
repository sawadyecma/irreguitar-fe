import { useState } from "react";
import { Open } from "./Open";

export default {
  title: "svg/Open",
  component: Open,
};

export const Pressed = () => <Open marked />;
export const NonPressed = () => <Open />;
export const Auxiliary = () => <Open auxiliary />;
export const halfCutTop = () => <Open halfCut="top" />;
export const halfCutBottom = () => <Open halfCut="bottom" />;

export const Pressable = () => {
  const [marked, setMarked] = useState<boolean>(false);

  return <Open marked={marked} onClick={() => setMarked(!marked)} />;
};
