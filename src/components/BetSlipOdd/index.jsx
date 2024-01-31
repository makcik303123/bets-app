import React from "react";
import "./BetSlipOdd.scss";

import { useActions } from "../../hooks";

import BetSlipOddCounter from "./BetSlipOddCounter";
import BetSlipOddTotal from "./BetSlipOddTotal";

function BetSlipOdd({ data, listType, index, invalid }) {
	const {
		id,
		matchId,
		firstTeam,
		secondTeam,
		teamWinner,
		event,
		multiplayer,
		amount,
	} = data;

	const { removeBetSlip } = useActions();

	return (
		<div className={"content__bet" + (invalid ? " invalid" : "")}>
			<div className="bet__delete" onClick={() => removeBetSlip(id)}>
				<svg width={20} height={20}>
					<use href="./img/icons/sprite.svg#delete-bet-slip"></use>
				</svg>
			</div>
			<div className="bet__information">
				<div className="information__header">
					{firstTeam + " vs " + secondTeam}
				</div>
				<div className="information__user-selected">
					<div className="user-selected__wrapper">
						<span className="user-selected__event">{event}</span>
						<span className="user-selected__team">{teamWinner}</span>
					</div>
					<span className="user-selected__multiplayer">{multiplayer}</span>
				</div>
			</div>
			{!!listType || (
				<>
					<BetSlipOddCounter amount={amount} index={index} />
					<BetSlipOddTotal amount={amount} multiplayer={multiplayer} />
				</>
			)}
		</div>
	);
}

export default BetSlipOdd;
