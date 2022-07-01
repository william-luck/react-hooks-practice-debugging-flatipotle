import React, { useState } from "react";
import burritoImg from "../images/burrito-bowl.jpg";
import Side from "./Side";


function Order({order}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked)
  }

  return (
    <div className="ui centered raised card">
      <div className="image">
        <img src={burritoImg} alt="burrito bowl" />
      </div>
      <div className="content">
        <b>Protein:</b>
        <br />
        {(order.protein).length > 0 ? order.protein.join(", ") : "None"}
        <br />
        <b>Fillings:</b>
        <br />
        {(order.fillings).length > 0 ? order.fillings.join(", ") : "None"}
        <br />
        <b>Toppings:</b>
        <br />
        {(order.toppings).length > 0 ? order.toppings.join(", ") : "None"}
        <br />
      </div>
      <div className="extra content">
        {(order.sides).length > 0 ? (
          <button className="ui button small" onClick={handleClick}>
            View Sides
          </button>
        ) : (
          <p>No sides</p>
        )}

        {/* this is just a shortcut to writing state.isClicked ? <Side sides={props.sides} /> : null */}
        {isClicked && <Side sides={order.sides} />}
      </div>
    </div>
  );
}

export default Order;
