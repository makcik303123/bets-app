import React from "react";
import { instance } from "../api/api";
import GameBar from "../components/GameBar";
import Panel from "../components/Panel";
import { writeUserData } from "../firebase";

function Bets() {
	const [dataGames, setDataGames] = React.useState([]);
	const [activeVideoGame, setActiveVideoGame] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(true);
	const arrVideoGames = [
		["ALL", "GAMES"],
		"cs-go",
		"dota-2",
		"league-of-legends",
		"lol-wild-rift",
		"r6-siege",
		"ow",
		"starcraft-2",
		"rl",
		"call",
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
				const liveGamesResponce = await instance.get(
					`/matches/running${filter}`
				);
				const upcommingGamesResponce = await instance.get(
					`/matches/upcoming${filter}`
				);
				setDataGames([
					...liveGamesResponce.data,
					...upcommingGamesResponce.data,
				]);
				setIsLoading(false);
			} catch (error) {
				alert("Error");
			}
		}
		fetchData();
		writeUserData(231242154715721, "makcim", "asdada@dsad.ru");
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
