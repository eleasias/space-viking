import React from "react";
import {
  displayBuildingCost,
  displayBuildingPower,
} from "../helpers/displayNumbers";

const Building = (props) => {
  const buildingCost = displayBuildingCost(props.cost);
  const conditionalBackground =
    props.score < props.cost
      ? "bg-red-900 text-white"
      : "text-white bg-slate-600";
  return (
    <button
      className={`rounded min-w-full p-2 mb-2 font-bold ${conditionalBackground}`}
      onClick={() => {
        props.onClick(props.power, props.cost, props.index);
      }}
    >
      {props.name} : {buildingCost} ({props.buildingCount})
    </button>
  );
};

export default Building;
