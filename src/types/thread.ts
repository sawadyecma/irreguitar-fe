import { Absnotes, ThreadNum, Turning } from "irreguitar-pkg";

export interface Thread {
  thNum: ThreadNum;
  markedFlets: number[];
  openNote: Absnotes;
}

interface CreateProps {
  turning: Turning;
  markedFlets?: Map<ThreadNum, number[]>;
  threadOrder?: "asc" | "desc";
}
export class ThreadsFactory {
  static create({
    turning,
    markedFlets = new Map(),
    threadOrder = "asc",
  }: CreateProps): Thread[] {
    return Array.from(turning.getThreads())
      .sort(([a], [b]) => {
        return threadOrder === "asc" ? a - b : b - a;
      })
      .map(([thNum, thread]) => {
        return {
          thNum: thNum as ThreadNum,
          markedFlets: markedFlets.get(thNum) ?? [],
          openNote: thread.getOpenNote().getValue(),
        };
      });
  }
}
