import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { TurningList } from "./pages/TurningList/TurningList";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnings" element={<TurningList />} />
      </Routes>
    </>
  );
};
