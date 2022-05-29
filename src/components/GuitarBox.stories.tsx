import { Button } from "antd";
import { AbsnoteImpl, ThreadImpl, TURNING_CATALOG } from "irreguitar-pkg";
import { useState } from "react";
import { Thread, ThreadsFactory } from "../types/thread";
import { ChordNameBox } from "./ChordNameBox";
import { GuitarBox } from "./GuitarBox";
import * as Tone from "tone";

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

  const onTurnHandler = (thNum: number, diff: number) => {
    setThreads((threads) => {
      return threads.map((thread) => {
        if (thread.thNum === thNum) {
          return { ...thread, openNote: thread.openNote + diff };
        }
        return thread;
      });
    });
  };

  const onStrokeHandler = (stroke: "up" | "down") => {
    const initialAbsnotes: string[] = [];
    const absnotes: string[] = threads.reduce((acc, cur) => {
      if (cur.markedFlets.length === 0) {
        return acc;
      }

      return [
        ...acc,
        ...cur.markedFlets.map((markedFlet) =>
          new ThreadImpl(new AbsnoteImpl(cur.openNote))
            .getNote(markedFlet)
            .getName()
        ),
      ];
    }, initialAbsnotes);

    if (stroke === "down") {
      absnotes.reverse();
    }

    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    absnotes.forEach((absnote, index) => {
      synth.triggerAttackRelease(absnote, "8n", now + 0.03 * index);
    });
  };

  return (
    <>
      <GuitarBox
        threads={threads}
        onClick={onClickHandler}
        onTurn={onTurnHandler}
      />
      <ChordNameBox threads={threads} />
      <Button type="primary" onClick={() => onStrokeHandler("down")}>
        Down Stroke
      </Button>
      <Button type="primary" onClick={() => onStrokeHandler("up")}>
        Up Stroke
      </Button>
    </>
  );
};
