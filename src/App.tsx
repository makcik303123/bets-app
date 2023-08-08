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
              <div>333</div>
              <div className="test">
                <img src="../img/valorant.webp" alt="valorant" />
              </div>
            </div>
            <div className="match-body">
              <div className="select">
                position: relative; align-items: center;
              </div>
              <div className="teamLeft">
                position: relative; align-items: center;
              </div>
              <div className="draw">1:2</div>
              <div className="teamRight">
                position: relative; align-items: center;
              </div>
            </div>
            <div className="match-more">
              <button className="more-btn">
                <span>23</span>
                <img width={15} height={15} src="../img/down.svg" alt="down" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
