import React from "react";
import "./App.scss";
import "./libs/reset.scss";
import Header from "./components/Header/Header";
import Match from "./components/Match/Match";

function App() {
	const arrayGames = [
		{
			team1: "Karmine Corp",
			team2: "Team Secret",
		},
		{
			team1: "Team Spirit",
			team2: "Team Secret",
		},
		{
			team1: "Team Navi",
			team2: "Virtus Pro",
		},
	];
	return (
		<div className="App">
			<Header />
			<div className="swiper">
				<img src="../img/slide.png" alt="slide" />
			</div>
			<div className="game-bar container">
				<div className="wrapper__button active">
					<span>ALL</span>
					<span>GAMES</span>
				</div>
				<div className="wrapper__button">
					<img src="../img/csgo.png" alt="csgo" />
				</div>
				<div className="wrapper__button">
					<img src="../img/dota2.png" alt="dota2" />
				</div>
				<div className="wrapper__button">
					<img src="../img/lol.png" alt="lol" />
				</div>
				<div className="wrapper__button">
					<img src="../img/rain.png" alt="rain" />
				</div>
				<div className="wrapper__button">
					<img src="../img/call.png" alt="call" />
				</div>
				<div className="wrapper__button">
					<img src="../img/overwatch.png" alt="overwatch" />
				</div>
				<div className="wrapper__button">
					<img src="../img/starcraft.png" alt="starcraft" />
				</div>
				<div className="wrapper__button">
					<img src="../img/nba.png" alt="nba" />
				</div>
				<div className="wrapper__button">
					<img src="../img/rocket.png" alt="rocket" />
				</div>
				<div className="wrapper__button">
					<span>MORE</span>
					<span>GAMES</span>
				</div>
			</div>
			<div className="table-container container">
				<div className="table-head">
					<div className="table-row_left">
						<span className=" table-head__date">Date</span>
						<span className=" table-head__game">Game</span>
					</div>
					<div className="table-row_center">
						<div className="select">
							<span className="table-head__market">Select</span>
						</div>
						<div className="teamLeft">
							<span>1</span>
						</div>
						<div className="draw">
							<span className="table-head__draw">Draw</span>
						</div>
						<div className="teamRight">
							<span>2</span>
						</div>
					</div>
					<div className="table-row_right">
						<span className="table-head__more">More</span>
					</div>
				</div>
				<div className="table-content">
					{arrayGames.map((game) => (
						<Match teamLeftName={game.team1} teamRightName={game.team2} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
