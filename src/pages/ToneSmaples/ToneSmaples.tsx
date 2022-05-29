import { AppLayput } from "../../components/layout/AppLayout";
import * as Tone from "tone";
import { Button } from "antd";
import Title from "antd/lib/typography/Title";

export const ToneSmaples = () => {
  const hello = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "32n");
    // synth.triggerAttackRelease("B4", "16n");
    // synth.triggerAttackRelease("C4", "8n");
  };

  const triggerAttackRelease = () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("E4", "8n", now + 0.5);
    synth.triggerAttackRelease("G4", "8n", now + 1);
  };

  const interval = () => {
    // setInterval(() => console.log(Tone.now()), 100);
  };

  const scheduling = () => {
    // create two monophonic synths
    const synthA = new Tone.FMSynth().toDestination();
    const synthB = new Tone.AMSynth().toDestination();
    //play a note every quarter-note
    new Tone.Loop((time) => {
      synthA.triggerAttackRelease("C2", "8n", time);
    }, "4n").start(0);
    //play another note every off quarter-note, by starting it "8n"
    new Tone.Loop((time) => {
      synthB.triggerAttackRelease("C4", "8n", time);
    }, "4n").start("8n");
    // the loops start when the Transport is started
    Tone.Transport.start();
    // ramp up to 800 bpm over 10 seconds
    Tone.Transport.bpm.rampTo(800, 10);
  };

  const instrument = () => {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    synth.triggerAttack("D4", now);
    synth.triggerAttack("F4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    synth.triggerAttack("C5", now + 1.5);
    synth.triggerAttack("E5", now + 2);
    synth.triggerAttack("B4", now + 2);
    synth.triggerRelease(["D4", "F4", "A4", "C5", "E5", "B4"], now + 4);
  };

  return (
    <AppLayput>
      <>
        <Title>Tone.js Samples</Title>
        <div style={{ width: 200 }}>
          <Button block onClick={hello}>
            Hello Tone
          </Button>
          <Button block onClick={triggerAttackRelease}>
            Trigger Attack Release
          </Button>
          <Button block onClick={interval}>
            interval
          </Button>
          <Button block onClick={scheduling}>
            Scheduling
          </Button>
          <Button block onClick={instrument}>
            instrument
          </Button>
        </div>
      </>
    </AppLayput>
  );
};
