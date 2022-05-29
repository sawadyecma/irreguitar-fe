import { AbsnoteImpl, ThreadImpl, TURNING_CATALOG } from "irreguitar-pkg";
import { GuitarBox } from "../components/GuitarBox";
import { ThreadsFactory } from "../types/thread";
import * as Tone from "tone";
import { Button } from "antd";

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

  const onStroke = (stroke: "up" | "down") => {
    const absnotes = threads
      .map((thread) => new AbsnoteImpl(thread.openNote))
      .sort((a, b) =>
        stroke === "down"
          ? a.getValue() - b.getValue()
          : b.getValue() - a.getValue()
      )
      .map((absnote) => absnote.getName());

    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    absnotes.forEach((absnote, index) => {
      synth.triggerAttackRelease(absnote, "8n", now + 0.03 * index);
    });
  };

  return (
    <>
      <GuitarBox threads={threads} onClick={onClickHandler} />
      <Button type="primary" onClick={() => onStroke("down")}>
        Down Stroke
      </Button>
      <Button type="primary" onClick={() => onStroke("up")}>
        Up Stroke
      </Button>
    </>
  );
};
