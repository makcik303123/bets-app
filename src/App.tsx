import React from "react";
import "./App.scss";
import "./libs/reset.scss";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="swiper">
        <img src="../img/slide.png" alt="slide" />
      </div>
      <div className="game-bar container">
        <div className="wrapper__button active">
          <span>ALL</span>
          <span>GAMES</span>
        </div>
        <div className="wrapper__button">
          <img src="../img/csgo.png" alt="csgo" />
        </div>
        <div className="wrapper__button">
          <img src="../img/dota2.png" alt="dota2" />
        </div>
        <div className="wrapper__button">
          <img src="../img/lol.png" alt="lol" />
        </div>
        <div className="wrapper__button">
          <img src="../img/rain.png" alt="rain" />
        </div>
        <div className="wrapper__button">
          <img src="../img/call.png" alt="call" />
        </div>
        <div className="wrapper__button">
          <img src="../img/overwatch.png" alt="overwatch" />
        </div>
        <div className="wrapper__button">
          <img src="../img/starcraft.png" alt="starcraft" />
        </div>
        <div className="wrapper__button">
          <img src="../img/nba.png" alt="nba" />
        </div>
        <div className="wrapper__button">
          <img src="../img/rocket.png" alt="rocket" />
        </div>
        <div className="wrapper__button">
          <span>MORE</span>
          <span>GAMES</span>
        </div>
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
                <div className="team-name">Karmine Corp</div>
                <div className="team-logo">
                  <img
                    width={24}
                    height={24}
                    src="../img/team-logo.png"
                    alt="logo"
                  />
                </div>
                <div className="team-btn">1.04</div>
              </div>
              <div className="draw">1:2</div>
              <div className="teamRight team">
                <div className="team-name">Team Secret</div>
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
                  <img
                    width={15}
                    height={15}
                    src="../img/down.svg"
                    alt="down"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
