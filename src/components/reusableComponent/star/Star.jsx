import React from "react";
import "./star.css";

export default function Star(props) {
  let { color } = props;

  if (!color) {
    color = "white";
  }

  return (
    <div className={`my-3 star-icon ${color}`}>
      <i className="fa-solid fa-star"></i>
    </div>
  );
}
