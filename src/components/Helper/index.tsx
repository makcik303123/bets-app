import React from "react";
import BetSlip from "../BetSlip";

import "./Helper.scss";
import History from "../History";
import Quest from "../Quest";
import { useTypedSelector } from "../../hooks";

function Helper() {
  const buttons = ["betslip", "history", "quest"];
  const [activeButton, setActiveButton] = React.useState(0);

  // const list = useTypedSelector((state) => state.betSlipListReducer.list);

  // React.useEffect(() => {
  //   if (!list.length) {
  //     setActiveButton(2);
  //   }
  // }, []);

  return (
    <div className="helper">
      <div className="switcher">
        {buttons.map((button, i) => (
          <button
            key={i}
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
        {(() => {
          switch (activeButton) {
            case 0:
              return <BetSlip />;
            case 1:
              return <History />;
            case 2:
              return <Quest />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default Helper;
