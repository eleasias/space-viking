import React from "react";
import Counter from "./Counter";
import { useState } from "react";

const Scoreboard = (props) => {
  const [isClicked, setIsClicked] = useState("bg-slate-800");
  const handleClickBuild = () => {
    setIsClicked("bg-slate-700");
    setTimeout(() => {
      setIsClicked("bg-slate-800");
    }, 50);
    props.dispatch({
      type: "clickBuilding",
    });
  };

  return (
    <div
      onClick={handleClickBuild}
      className={
        "p-5 text-white select-none flex flex-col gap-1 mx-5 rounded " +
        isClicked
      }
    >
      <Counter score={props.state.score} power={props.state.power}></Counter>
    </div>
  );
};

export default Scoreboard;
