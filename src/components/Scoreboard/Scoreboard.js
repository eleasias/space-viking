import React from "react";
import Counter from "./Counter";

const Scoreboard = (props) => {
  const handleClickBuild = () => {
    props.dispatch({
      type: "clickBuilding",
    });
  };

  return (
    <div
      onClick={handleClickBuild}
      className="bg-slate-800 p-5 text-white flex flex-col gap-1 mx-5 rounded"
    >
      <Counter score={props.state.score} power={props.state.power}></Counter>
    </div>
  );
};

export default Scoreboard;
