import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div
      className="card"
      onClick={() => props.handleClick(props.id, props.clicked)}
    >
      <div className="img-container">
        <img className="cardImage" alt={props.name} src={require("../../Images/" + props.image)} />
      </div>
    </div>
  );
}

export default FriendCard;
