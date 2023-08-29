import React from "react";
import "./GameBar.scss";

const GameBar = ({ activeVideoGame, setActiveVideoGame }) => {
	const arrVideoGames = [
		["ALL", "GAMES"],
		"cs-go",
		"dota-2",
		"league-of-legends",
		"rain",
		"call",
		"ow",
		"starcraft-2",
		"rl",
		"nba",
		["MORE", "GAMES"],
	];

	return (
		<div className="game-bar container">
			{arrVideoGames.map((videoGame, i) => (
				<div
					onClick={() => setActiveVideoGame(i)}
					className={
						activeVideoGame === i ? "wrapper__button active" : "wrapper__button"
					}
				>
					{typeof videoGame === "string" ? (
						<img src={`../img/${videoGame}.png`} alt={videoGame} />
					) : (
						<>
							<span>{videoGame[0]}</span>
							<span>{videoGame[1]}</span>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default GameBar;
