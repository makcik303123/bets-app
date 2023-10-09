import React from "react";
import { instance } from "../api/api";
import GameBar from "../components/GameBar";
import Panel from "../components/Panel";
import BetSlip from "../components/BetSlip";

function Bets() {
  const [dataGames, setDataGames] = React.useState([]);
  const [activeVideoGame, setActiveVideoGame] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

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

  const filter =
    typeof arrVideoGames[activeVideoGame] === "string"
      ? "?filter[videogame]=" + arrVideoGames[activeVideoGame]
      : "";

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const liveGamesResponce = await instance.get(
          `/matches/running${filter}`
        );
        const upcommingGamesResponce = await instance.get(
          `/matches/upcoming${filter}`
        );
        setDataGames([
          ...liveGamesResponce.data,
          ...upcommingGamesResponce.data,
        ]);
        setIsLoading(false);
      } catch (error) {
        alert("Error");
      }
    }
    fetchData();
  }, [filter]);

  console.log(dataGames);

  const buttons = ["betslip", "history", "quest"];
  const [activeButton, setActiveButton] = React.useState(0);

  return (
    <div className="grid">
      <div className="grid-site"></div>
      <div className="grid-center">
        <div className="swiper">
          <img src="../img/slide.png" alt="slide" />
        </div>
        <GameBar
          activeVideoGame={activeVideoGame}
          setActiveVideoGame={setActiveVideoGame}
          arrVideoGames={arrVideoGames}
        />
        <Panel dataGames={dataGames} isLoading={isLoading} />
      </div>
      <div className="grid-site">
        <div className="helper">
          <div className="switcher">
            {buttons.map((button, i) => (
              <button
                onClick={() => setActiveButton(i)}
                className={
                  "switcher-button" + (activeButton === i ? " active" : "")
                }
              >
                {button}
              </button>
            ))}
          </div>
          <div className="content">
            <BetSlip />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bets;
