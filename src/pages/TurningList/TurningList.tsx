import { ChordMaker } from "../../components/GuitarBox.stories";
import "antd/dist/antd.min.css";
import { AppLayput } from "../../components/layout/AppLayout";

export const TurningList = () => {
  return (
    <AppLayput>
      <ChordMaker />
    </AppLayput>
  );
};
