import React from "react";
import instance from "../api/api";
import GameBar from "../components/GameBar";
import Panel from "../components/Panel";

function Bets() {
	const [dataGames, setDataGames] = React.useState([]);
	const [activeVideoGame, setActiveVideoGame] = React.useState(0);

	React.useEffect(() => {
		async function fetchData() {
			try {
				const gamesResponce = await instance.get("/matches/upcoming");
				setDataGames(gamesResponce.data);
			} catch (error) {
				alert("Error");
			}
		}
		fetchData();
	}, []);

	console.log(dataGames);

	return (
		<>
			<div className="swiper">
				<img src="../img/slide.png" alt="slide" />
			</div>
			<GameBar
				activeVideoGame={activeVideoGame}
				setActiveVideoGame={setActiveVideoGame}
			/>
			<Panel dataGames={dataGames} />
		</>
	);
}

export default Bets;
