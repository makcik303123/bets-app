import React from "react";
import "./Game.scss";

function Game({ dataGame }) {
	console.log(dataGame.opponents[0].opponent.name);
	console.log("1");
	console.log(dataGame.opponents[1].opponent.name);
	console.log("2");
	// const time = dataGame.begin_at.slice(-9, -5);
	return (
		<div className="match">
			<div className="match-header">
				<div className="match-date">
					<span className="date-time">
						{dataGame.begin_at ? dataGame.begin_at.slice(-9, -4) : "Upcomming"}
					</span>
					<span className="date-day">
						{dataGame.begin_at ? dataGame.begin_at.slice(5, 10) : "Upcomming"}
					</span>
				</div>
				<div className="match-game">
					{/* <img src={dataGame.videogame.name} alt="valorant" /> */}
				</div>
				//{" "}
			</div>
			//{" "}
			<div className="match-body">
				//{" "}
				<div className="select">
					{/* // <span className="select-event">{props.gameEvent}</span> */}
					{/* // <span className="select-tournament">{dataGame.league.name}</span> */}
					//{" "}
				</div>
				//{" "}
				<div className="teamLeft team">
					//{" "}
					<div className="team-name">
						{dataGame.opponents[0].opponent.name
							? dataGame.opponents[0].opponent.name
							: ""}
					</div>
					//{" "}
					<div className="team-logo">
						//{" "}
						{/* <img width={24} height={24} src={props.teamLeftLogo} alt="logo" /> */}
						//{" "}
					</div>
					{/* // <div className="team-btn">{props.teamLeftMultiplier}</div> */}
					//{" "}
				</div>
				// <div className="draw">1:2</div>
				//{" "}
				<div className="teamRight team">
					//{" "}
					<div className="team-name">
						{dataGame.opponents[1].opponent.name
							? dataGame.opponents[1].opponent.name
							: ""}
					</div>
					//{" "}
					<div className="team-logo">
						//{" "}
						{/* <img width={24} height={24} src={props.teamRightLogo} alt="logo" /> */}
						//{" "}
					</div>
					{/* // <div className="team-btn">{props.teamRightMultiplier}</div> */}
					//{" "}
				</div>
				//{" "}
			</div>
			//{" "}
			<div className="match-more">
				//{" "}
				<button className="more-btn">
					// <span className="more-counter">23</span>
					//{" "}
					<div className="more-down">
						// <img width={15} height={15} src="../img/down.svg" alt="down" />
						//{" "}
					</div>
					//{" "}
				</button>
			</div>
		</div>
	);
}

export default Game;
