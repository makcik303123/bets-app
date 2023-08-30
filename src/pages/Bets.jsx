import React from "react";
import { instance } from "../api/api";
import GameBar from "../components/GameBar";
import Panel from "../components/Panel";

function Bets() {
	const [dataGames, setDataGames] = React.useState([]);
	const [activeVideoGame, setActiveVideoGame] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(true);
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

	const filter =
		typeof arrVideoGames[activeVideoGame] === "string"
			? "?filter[videogame]=" + arrVideoGames[activeVideoGame]
			: "";

	React.useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const gamesResponce = await instance.get(`/matches/upcoming${filter}`);
				setDataGames(gamesResponce.data);
				setIsLoading(false);
			} catch (error) {
				alert("Error");
			}
		}
		fetchData();
	}, [filter]);

	console.log(dataGames);

	return (
		<>
			<div className="swiper">
				<img src="../img/slide.png" alt="slide" />
			</div>
			<GameBar
				activeVideoGame={activeVideoGame}
				setActiveVideoGame={setActiveVideoGame}
				arrVideoGames={arrVideoGames}
			/>
			<Panel dataGames={dataGames} isLoading={isLoading} />
		</>
	);
}

export default Bets;
