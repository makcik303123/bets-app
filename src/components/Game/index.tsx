import React from "react";
import { useActions } from "../../hooks";
import type { BetSlip } from "../../types/User.type";

import "./Game.scss";

type GameProps = {
  dataGame: any;
  list: BetSlip[];
};

function Game({ dataGame, list }: GameProps) {
  const multiplayer = 1.85;
  const { status } = dataGame;

  const { clickOnMultiplayer } = useActions();

  const activeLeftBtn = list.some((obj) => obj.id === dataGame.id + "_0");
  const activeRightBtn = list.some((obj) => obj.id === dataGame.id + "_1");

  function clickHandler(btn: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const btnId = (btn.target as HTMLDivElement).id;

    const betSlipData: BetSlip = {
      id: dataGame.id + "_" + btnId,
      matchId: dataGame.id,
      firstTeam: dataGame.opponents[0]?.opponent.name || "TBD",
      secondTeam: dataGame.opponents[1]?.opponent.name || "TBD",
      teamWinner: dataGame.opponents[btnId]?.opponent.name || "TBD",
      event: "Match winner",
      multiplayer: 1.85,
      amount: 0,
      gameStarted: false,
      gameFinished: false,
      betWin: null,
    };
    console.log("click");

    clickOnMultiplayer(betSlipData);
  }

  return (
    <div className="match">
      <div className="match-header">
        <div className="match-date">
          <span className="date-time">
            {status === "running"
              ? "LIVE"
              : dataGame?.begin_at?.slice(-9, -4) || "Upcom"}
          </span>
          <span className="date-day">
            {status === "running"
              ? ""
              : dataGame?.begin_at?.slice(5, 10) || "Soon"}
          </span>
        </div>
        <div className="match-game">
          <img
            width={22}
            height={22}
            src={`img/${dataGame.videogame.slug}.webp`}
            alt={dataGame.videogame.slug}
          />
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
          <div
            id="0"
            className={"team-btn " + (activeLeftBtn ? "active" : "")}
            onClick={clickHandler}
            data-state="unactive"
          >
            {multiplayer}
          </div>
        </div>
        <div className="draw">0:0</div>
        <div className="teamRight team">
          <div className="team-name">
            {dataGame.opponents[1]?.opponent.name || "TBD"}
          </div>
          <div className="team-logo">
            <img
              width={24}
              height={24}
              src={
                dataGame.opponents[1]?.opponent.image_url || "../img/user.svg"
              }
              alt="logo"
            />
          </div>
          <div
            id="1"
            className={"team-btn " + (activeRightBtn ? "active" : "")}
            onClick={clickHandler}
          >
            {multiplayer}
          </div>
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
