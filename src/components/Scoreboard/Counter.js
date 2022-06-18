import React from "react";
import { displayScore, displayPower } from "../../helpers/displayNumbers";

const Counter = (props) => {
  const score = displayScore(props.score);
  const power = displayPower(props.power);
  return (
    <div>
      <h2>Your current score is {score}</h2>
      <h2>Your current power is {power}</h2>
    </div>
  );
};

export default Counter;
