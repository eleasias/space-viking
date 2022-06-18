import React from "react";
import Counter from "./Counter";

const Scoreboard = (props) => {
  return (
    <div className="bg-slate-600 font-bold text-white border-slate-900 border p-4 mb-4 mr-4 ml-4 rounded">
      <Counter score={props.state.score} power={props.state.power}></Counter>
    </div>
  );
};

export default Scoreboard;
