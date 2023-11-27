import React from "react";
import "./History.scss";

function History() {
  const switcherButtons = ["All", "Pending", "Resulted"];

  return (
    <div className="head__switcher">
      {switcherButtons.map((btn, i) => (
        <button className={"switcher__btn "} key={i}>
          {btn}
        </button>
      ))}
    </div>
  );
}

export default History;
