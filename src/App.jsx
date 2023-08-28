import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./App.scss";
import "./libs/reset.scss";
import Header from "./components/Header";
import Game from "./components/Game";
import instance from "./api/api";

function App() {
  const arrayGames = [
    {
      gameName: "../img/valorant.webp",
      gameEvent: "Winner of the Game",
      tournament: "2023 [RL] RLCS World Championship",
      gameDataTime: "19:10",
      gameDataDay: "8 AUG.",
      teamLeftName: "Karmine Corp",
      teamLeftMultiplier: "1.04",
      teamLeftLogo: "../img/team-logo.png",
      teamRightName: "Team Secret",
      teamRightMultiplier: "8.28",
      teamRightLogo: "../img/team-logo-1.png",
    },
    {
      gameName: "../img/valorant.webp",
      gameEvent: "Winner of the Game",
      tournament: "2023 [RL] RLCS World Championship",
      gameDataTime: "19:10",
      gameDataDay: "8 AUG.",
      teamLeftName: "Karmine Corp",
      teamLeftMultiplier: "1.04",
      teamLeftLogo: "../img/team-logo.png",
      teamRightName: "Team Secret",
      teamRightMultiplier: "8.28",
      teamRightLogo: "../img/team-logo-1.png",
    },
    {
      gameName: "../img/valorant.webp",
      gameEvent: "Winner of the Game",
      tournament: "2023 [RL] RLCS World Championship",
      gameDataTime: "19:10",
      gameDataDay: "8 AUG.",
      teamLeftName: "Karmine Corp",
      teamLeftMultiplier: "1.04",
      teamLeftLogo: "../img/team-logo.png",
      teamRightName: "Team Secret",
      teamRightMultiplier: "8.28",
      teamRightLogo: "../img/team-logo-1.png",
    },
  ];

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

  const arrVideoGames = [
    ["ALL", "GAMES"],
    "cs-go",
    "dota-2",
    "league-of-legends",
    "rain",
    "call",
    "ow",
    "starcraft-2",
    "rl",
    "nba",
    ["MORE", "GAMES"],
  ];

  return (
    <div className="App">
      <Header />
      <div className="swiper">
        <img src="../img/slide.png" alt="slide" />
      </div>
      <div className="game-bar container">
        {arrVideoGames.map((videoGame, i) => (
          <div
            onClick={() => setActiveVideoGame(i)}
            className={
              activeVideoGame === i
                ? "wrapper__button active"
                : "wrapper__button"
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
      <div className="table-container container">
        <div className="table-head">
          <div className="table-row_left">
            <span className=" table-head__date">Date</span>
            <span className=" table-head__game">Game</span>
          </div>
          <div className="table-row_center">
            <div className="select">
              <span className="table-head__market">Select</span>
            </div>
            <div className="teamLeft">
              <span>1</span>
            </div>
            <div className="draw">
              <span className="table-head__draw">Draw</span>
            </div>
            <div className="teamRight">
              <span>2</span>
            </div>
          </div>
          <div className="table-row_right">
            <span className="table-head__more">More</span>
          </div>
        </div>

        <div className="table-content">
          <Scrollbars
            style={{ height: 504 }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            renderThumbVertical={(props) => (
              <div {...props} className="thumb-vertical" />
            )}
          >
            {dataGames.map((dataGame) => (
              <Game dataGame={dataGame} />
            ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default App;
