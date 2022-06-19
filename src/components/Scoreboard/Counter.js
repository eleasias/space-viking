import React from "react";
import { bigNumberFormatter } from "../../helpers/displayNumbers";

const Counter = (props) => {
  const score = bigNumberFormatter(props.score);
  const power = bigNumberFormatter(props.power);
  return (
    <React.Fragment>
      <h2 className="font-bold text-2xl">{score}</h2>
      <h2>{power} per tick</h2>
    </React.Fragment>
  );
};

export default Counter;
