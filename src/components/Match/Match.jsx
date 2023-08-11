import React from "react";
import "./Match.scss";

export default function Match({ ...props }) {
	return (
		<div className="match">
			<div className="match-header">
				<div className="match-date">
					<span className="date-time">19:10</span>
					<span className="date-day">8 aug.</span>
				</div>
				<div className="match-game">
					<img src="../img/valorant.webp" alt="valorant" />
				</div>
			</div>
			<div className="match-body">
				<div className="select">
					<span className="select-event">Winner of the Game</span>
					<span className="select-tournament">
						2023 [RL] RLCS World Championship
					</span>
				</div>
				<div className="teamLeft team">
					<div className="team-name">{props.teamLeftName}</div>
					<div className="team-logo">
						<img width={24} height={24} src="../img/team-logo.png" alt="logo" />
					</div>
					<div className="team-btn">1.04</div>
				</div>
				<div className="draw">1:2</div>
				<div className="teamRight team">
					<div className="team-name">{props.teamRightName}</div>
					<div className="team-logo">
						<img
							width={24}
							height={24}
							src="../img/team-logo-1.png"
							alt="logo"
						/>
					</div>
					<div className="team-btn">8.28</div>
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
