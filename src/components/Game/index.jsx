import React from "react";
import "./Game.scss";

function Game({ ...props }) {
  return (
    <div className="match">
      <div className="match-header">
        <div className="match-date">
          <span className="date-time">{props.gameDataTime}</span>
          <span className="date-day">{props.gameDataDay}</span>
        </div>
        <div className="match-game">
          <img src={props.gameName} alt="valorant" />
        </div>
      </div>
      <div className="match-body">
        <div className="select">
          <span className="select-event">{props.gameEvent}</span>
          <span className="select-tournament">{props.tournament}</span>
        </div>
        <div className="teamLeft team">
          <div className="team-name">{props.teamLeftName}</div>
          <div className="team-logo">
            <img width={24} height={24} src={props.teamLeftLogo} alt="logo" />
          </div>
          <div className="team-btn">{props.teamLeftMultiplier}</div>
        </div>
        <div className="draw">1:2</div>
        <div className="teamRight team">
          <div className="team-name">{props.teamRightName}</div>
          <div className="team-logo">
            <img width={24} height={24} src={props.teamRightLogo} alt="logo" />
          </div>
          <div className="team-btn">{props.teamRightMultiplier}</div>
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
