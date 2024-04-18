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
				<Route path="/bets" element={<Bets />} />
				<Route path="/news" element={<News />} />
				<Route path="/promo" element={<Promo />} />
				<Route path="/" element={<Bets />} />
			</Routes>
		</div>
	);
}

export default App;
