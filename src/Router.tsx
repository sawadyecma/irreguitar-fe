import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { TurningList } from "./components/pages/TurningList";

export const Router = () =>  {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/turnings" element={<TurningList />} />
			</Routes>
		</>
	);
}