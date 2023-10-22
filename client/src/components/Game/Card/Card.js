import React from "react";
import "./Card.css";

function Card({ topic, swipeDirection }) {
  return (
    <div
      className={`card ${
        swipeDirection === "right"
          ? "right-swipe"
          : swipeDirection === "left"
          ? "left-swipe"
          : ""
      }`}
      style={{
        backgroundColor:
          swipeDirection === "right"
            ? "#00ff00"
            : swipeDirection === "left"
            ? "#ff0000"
            : "white",
      }}
    >
      <div className="card-title">{topic}</div>
    </div>
  );
}

export default Card;
