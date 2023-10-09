import React from "react";
import "./GameBar.scss";

const GameBar = ({ activeVideoGame, setActiveVideoGame, arrVideoGames }) => {
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
