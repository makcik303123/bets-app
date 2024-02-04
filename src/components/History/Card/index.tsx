import React from "react";
import "./Card.scss";
import type { ActiveBets } from "../../../types/User.type";

type CardProps = {
  data: ActiveBets;
};

function Card({ data }: CardProps) {
  console.log(data, " card");

  return (
    <div className="history-card">
      <div className="history-card__event">
        <div className="event__tableStake">
          <span className="label">{data.event}</span>
          <span className="value">{data.teamWinner}</span>
        </div>
        <div className="event__tableStake">
          <span>Total Stake</span>
          <span className="value">{data.amount}RUB</span>
        </div>
        <div className="event__tableStake">
          <span>LOOT.BET pays</span>
          <span className="value">
            {Math.round(data.amount * data.multiplayer)}RUB
          </span>
        </div>
      </div>
      <div className="history-card__result">
        <div className="result__status status-pending">Pending</div>
        <div className="result__details">details</div>
      </div>
    </div>
  );
}

export default Card;
