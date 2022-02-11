import { useState } from "react";
import { Thread } from "../types/thread";
import { GuitarBox } from "./GuitarBox";

export default {
  title: "GuitarBox",
  component: GuitarBox,
};

export const NonPressedGuitar = () => (
  <GuitarBox
    threads={[
      {
        thNum: 1,
        markedFlets: [],
      },
      {
        thNum: 2,
        markedFlets: [],
      },
      {
        thNum: 3,
        markedFlets: [],
      },
      {
        thNum: 4,
        markedFlets: [],
      },
      {
        thNum: 5,
        markedFlets: [],
      },
      {
        thNum: 6,
        markedFlets: [],
      },
    ]}
  />
);

export const F_PressedGuitar = () => (
  <GuitarBox
    threads={[
      {
        thNum: 1,
        markedFlets: [1],
      },
      {
        thNum: 2,
        markedFlets: [1],
      },
      {
        thNum: 3,
        markedFlets: [2],
      },
      {
        thNum: 4,
        markedFlets: [3],
      },
      {
        thNum: 5,
        markedFlets: [3],
      },
      {
        thNum: 6,
        markedFlets: [1],
      },
    ]}
  />
);

export const MinorPentaScale = () => (
  <GuitarBox
    threads={[
      {
        thNum: 1,
        markedFlets: [5, 8],
      },
      {
        thNum: 2,
        markedFlets: [5, 8],
      },
      {
        thNum: 3,
        markedFlets: [5, 7],
      },
      {
        thNum: 4,
        markedFlets: [5, 7],
      },
      {
        thNum: 5,
        markedFlets: [5, 7],
      },
      {
        thNum: 6,
        markedFlets: [5, 8],
      },
    ]}
  />
);

export const ScaleMaker = () => {
  const [threads, setThreads] = useState<Thread[]>([
    {
      thNum: 1,
      markedFlets: [],
    },
    {
      thNum: 2,
      markedFlets: [],
    },
    {
      thNum: 3,
      markedFlets: [],
    },
    {
      thNum: 4,
      markedFlets: [],
    },
    {
      thNum: 5,
      markedFlets: [],
    },
    {
      thNum: 6,
      markedFlets: [],
    },
  ]);

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
  const [threads, setThreads] = useState<Thread[]>([
    {
      thNum: 1,
      markedFlets: [],
    },
    {
      thNum: 2,
      markedFlets: [],
    },
    {
      thNum: 3,
      markedFlets: [],
    },
    {
      thNum: 4,
      markedFlets: [],
    },
    {
      thNum: 5,
      markedFlets: [],
    },
    {
      thNum: 6,
      markedFlets: [],
    },
  ]);

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

  return <GuitarBox threads={threads} onClick={onClickHandler} />;
};
