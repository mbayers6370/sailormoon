import React from "react";
import "./style.css";

function Title(props) {
  return (
    <img
      alt="title"
      className="title"
      src={require("../../Images/sailorMoonTitle.png")}
    ></img>
  );
}

export default Title;
