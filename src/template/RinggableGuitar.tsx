import { AbsnoteImpl, ThreadImpl, TURNING_CATALOG } from "irreguitar-pkg";
import { GuitarBox } from "../components/GuitarBox";
import { ThreadsFactory } from "../types/thread";
import * as Tone from "tone";

export const RinggableGuitar = () => {
  const threads = ThreadsFactory.create({ turning: TURNING_CATALOG.Regular });

  const onClickHandler = (thNum: number, flet: number) => {
    const targetThread = threads.find((t) => t.thNum === thNum);
    if (targetThread === undefined) {
      return;
    }

    const note = new ThreadImpl(new AbsnoteImpl(targetThread.openNote)).getNote(
      flet
    );

    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease(note.getName(), "32n", now);
  };

  return <GuitarBox threads={threads} onClick={onClickHandler} />;
};
