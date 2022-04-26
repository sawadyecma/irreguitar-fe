import { TURNING_CATALOG } from "irreguitar-pkg";
import { useState } from "react";
import { Thread, ThreadsFactory } from "../types/thread";
import { ChordNameBox } from "./ChordNameBox";
import { GuitarBox } from "./GuitarBox";

export default {
  title: "GuitarBox",
  component: GuitarBox,
};

export const NonPressedGuitar = () => (
  <GuitarBox
    threads={ThreadsFactory.create({ turning: TURNING_CATALOG.Regular })}
  />
);

export const F_PressedGuitar = () => (
  <GuitarBox
    threads={ThreadsFactory.create({
      turning: TURNING_CATALOG.Regular,
      markedFlets: new Map([
        [1, [1]],
        [2, [1]],
        [3, [2]],
        [4, [3]],
        [5, [3]],
        [6, [1]],
      ]),
    })}
  />
);

export const MinorPentaScale = () => (
  <GuitarBox
    threads={ThreadsFactory.create({
      turning: TURNING_CATALOG.Regular,
      markedFlets: new Map([
        [1, [5, 8]],
        [2, [5, 8]],
        [3, [5, 7]],
        [4, [5, 7]],
        [5, [5, 7]],
        [6, [5, 8]],
      ]),
      threadOrder: "asc",
    })}
  />
);

export const ScaleMaker = () => {
  const [threads, setThreads] = useState<Thread[]>(
    ThreadsFactory.create({ turning: TURNING_CATALOG.Regular })
  );

  const onClickHandler = (thNum: number, flet: number): void => {
    const targetThread = threads.find((t) => t.thNum === thNum);
    if (targetThread === undefined) {
      return;
    }

    if (targetThread.markedFlets.includes(flet)) {
      setThreads((threadList) => {
        return threadList.map((thread) => {
          if (thread.thNum === thNum) {
            return {
              ...thread,
              markedFlets: thread.markedFlets.filter((f) => f !== flet),
            };
          }
          return thread;
        });
      });
      return;
    }

    setThreads((threadList) => {
      return threadList.map((thread) => {
        if (thread.thNum === thNum) {
          return { ...thread, markedFlets: [...thread.markedFlets, flet] };
        }
        return thread;
      });
    });
  };

  return <GuitarBox threads={threads} onClick={onClickHandler} />;
};

export const ChordMaker = () => {
  const [threads, setThreads] = useState<Thread[]>(
    ThreadsFactory.create({
      turning: TURNING_CATALOG.Regular,
      markedFlets: new Map([
        [3, [0]],
        [4, [2]],
        [5, [3]],
      ]),
    })
  );

  const onClickHandler = (thNum: number, flet: number): void => {
    const targetThread = threads.find((t) => t.thNum === thNum);
    if (targetThread === undefined) {
      return;
    }

    if (targetThread.markedFlets.includes(flet)) {
      setThreads((threadList) => {
        return threadList.map((thread) => {
          if (thread.thNum === thNum) {
            return {
              ...thread,
              markedFlets: thread.markedFlets.filter((f) => f !== flet),
            };
          }
          return thread;
        });
      });
      return;
    }

    setThreads((threadList) => {
      return threadList.map((thread) => {
        if (thread.thNum === thNum) {
          return { ...thread, markedFlets: [flet] };
        }
        return thread;
      });
    });
  };

  return (
    <>
      <GuitarBox threads={threads} onClick={onClickHandler} />
      <ChordNameBox threads={threads} />
    </>
  );
};
