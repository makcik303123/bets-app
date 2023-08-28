import React from "react";
import "./Game.scss";

function Game({ dataGame }) {
	//   console.log(dataGame.opponents[0].opponent.name);
	//   console.log("1");
	//   console.log(dataGame.opponents[1].opponent.name);
	//   console.log("2");
	// const time = dataGame.begin_at.slice(-9, -5);
	return (
		<div className="match">
			<div className="match-header">
				<div className="match-date">
					<span className="date-time">
						{dataGame?.begin_at?.slice(-9, -4) || "Upcom"}
					</span>
					<span className="date-day">
						{dataGame?.begin_at?.slice(5, 10) || "Soon"}
					</span>
				</div>
				<div className="match-game">
					{dataGame.videogame.slug}
					{/* {dataGame.videogame.id} */}
					{/* <img src={dataGame.videogame.name} alt="valorant" /> */}
				</div>
			</div>

			<div className="match-body">
				<div className="select">
					<span className="select-event">Event</span>
					<span className="select-tournament">{dataGame.league.name}</span>
				</div>
				<div className="teamLeft team">
					<div className="team-name">
						{dataGame.opponents[0]?.opponent.name || "TBD"}
					</div>
					<div className="team-logo">
						<img
							width={24}
							height={24}
							src={
								dataGame.opponents[0]?.opponent.image_url || "../img/user.svg"
							}
							alt="logo"
						/>
					</div>
					<div className="team-btn">2.5</div>
				</div>
				<div className="draw">1:2</div>
				<div className="teamRight team">
					<div className="team-name">
						{dataGame.opponents[1]?.opponent.name || "TBD"}
					</div>
					<div className="team-logo">
						<img
							width={24}
							height={24}
							src={dataGame.opponents[1]?.opponent.image_url || "TBD"}
							alt="logo"
						/>
					</div>
					<div className="team-btn">1.5</div>
				</div>
			</div>
			<div className="match-more">
				<button className="more-btn">
					<span className="more-counter">23</span>
					<div className="more-down">
						<img width={15} height={15} src="../img/down.svg" alt="down" />
					</div>
				</button>
			</div>
		</div>
	);
}

export default Game;
