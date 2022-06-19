import React from "react";
import { bigNumberFormatter } from "../helpers/displayNumbers";

const Building = (props) => {
  const buildingCost = bigNumberFormatter(props.cost);
  const conditionalBackground =
    props.score < props.cost
      ? "bg-slate-800 text-slate-400"
      : "text-white bg-slate-600";
  return (
    <button
      className={`rounded grid-cols-2 grid-flow-row min-w-full p-2 grid grid-rows-2  ${conditionalBackground}`}
      onClick={() => {
        props.onClick(props.power, props.cost, props.index);
      }}
    >
      <span className="text-left inline-block  font-bold">{props.name}</span>
      <span className=" text-right inline-block 0">x{props.buildingCount}</span>

      <span className="text-left inline-block ">{buildingCost} </span>
      <span className=" text-right inline-block 0">{props.power} pps</span>
    </button>
  );
};

export default Building;
