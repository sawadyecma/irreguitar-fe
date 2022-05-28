import {
  AbsnoteImpl,
  ChordAnalyzerImpl,
  ChordNamerImpl,
  ChordParserImpl,
  PlayImpl,
  Press,
  Thread,
  ThreadImpl,
  ThreadNum,
  TurningImpl,
} from "irreguitar-pkg";
import { Thread as ThreadType } from "../types/thread";

export const chordParser = new ChordParserImpl(
  new ChordAnalyzerImpl(),
  new ChordNamerImpl()
);

interface Props {
  threads: ThreadType[];
}

export const ChordNameBox = ({ threads }: Props) => {
  const rootThread = threads.reduce((prv, cur) => {
    return prv.thNum < cur.thNum && cur.markedFlets.length > 0 ? cur : prv;
  });

  const rootPress = {
    threadNum: rootThread.thNum,
    flet: rootThread.markedFlets[0],
  };

  const presses: Press[] = threads
    .filter(
      (thread) =>
        thread.thNum !== rootPress.threadNum && thread.markedFlets.length > 0
    )
    .map((thread) => {
      return {
        threadNum: thread.thNum,
        flet: thread.markedFlets[0],
      };
    });

  const play = new PlayImpl(
    new TurningImpl(
      new Map<ThreadNum, Thread>(
        threads.map((thread) => [
          thread.thNum,
          new ThreadImpl(new AbsnoteImpl(thread.openNote)),
        ])
      )
    )
  );

  const chord = play.getChord(rootPress, presses);

  const chordName = chordParser.parse(chord);
  return <>{chordName}</>;
};
