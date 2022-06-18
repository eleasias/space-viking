import React from "react";
import { displayScore } from "../../helpers/displayNumbers";

const Counter = (props) => {
  const score = displayScore(props.score);
  return (
    <div>
      <h2>Your current score is {score}</h2>
      <h2>Your current power is {props.power}</h2>
    </div>
  );
};

export default Counter;
