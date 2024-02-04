import React from "react";
import "./GameBar.scss";

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

type GameBarProps = {
  activeVideoGame: number;
  setActiveVideoGame: (i: number) => void;
};

const GameBar = ({ activeVideoGame, setActiveVideoGame }: GameBarProps) => {
  return (
    <div className="game-bar container">
      {arrVideoGames.map((videoGame, i) => (
        <div
          key={i}
          onClick={() => setActiveVideoGame(i)}
          className={
            activeVideoGame === i ? "wrapper__button active" : "wrapper__button"
          }
        >
          {typeof videoGame === "string" ? (
            <img src={`../img/${videoGame}.png`} alt={videoGame} />
          ) : (
            <>
              <span>{videoGame[0]}</span>
              <span>{videoGame[1]}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default GameBar;
