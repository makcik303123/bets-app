import React from "react";

import "./App.scss";
import "./libs/reset.scss";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Bets from "./pages/Bets";
import News from "./pages/News";
import Promo from "./pages/Promo";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route exact path="/" element={<Bets />} />
				<Route exact path="/news" element={<News />} />
				<Route exact path="/promo" element={<Promo />} />
			</Routes>
		</div>
	);
}

export default App;
