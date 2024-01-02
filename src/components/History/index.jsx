import { useState } from "react";
import "./History.scss";
import Card from "./Card";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector, useDispatch } from "react-redux";

function History() {
  const switcherButtons = ["All", "Pending", "Resulted"];

  const [active, setActive] = useState(0);

  const { historyBetsList } = useSelector(
    (state) => state.getUserDataReducer.data
  );

  const itemsCard = [...historyBetsList.active].reverse();

  console.log(historyBetsList);

  const listHeight = () => {
    const betHeight = 138;
    return itemsCard.length > 3 ? 3 * betHeight : itemsCard.length * betHeight;
  };

  return (
    <div className="history">
      <div className="history__filter">
        <div className="filter__container">
          <div className="filter__switcher">
            {switcherButtons.map((btn, i) => (
              <button
                className={"switcher__btn " + (active === i ? "active" : "")}
                key={i}
                onClick={() => setActive(i)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="history__list">
        <Scrollbars
          style={{ height: listHeight() + "px" }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          renderThumbVertical={(props) => (
            <div {...props} className="thumb-vertical" />
          )}
          renderView={(props) => <div {...props} className="view" />}
        >
          {itemsCard.map((card, i) => (
            <Card key={i} data={card} />
          ))}
        </Scrollbars>
      </div>
    </div>
  );
}

export default History;
