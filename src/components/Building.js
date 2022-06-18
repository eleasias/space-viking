import React from "react";
import {
  displayBuildingCost,
  displayBuildingPower,
} from "../helpers/displayNumbers";

const Building = (props) => {
  const buildingCost = displayBuildingCost(props.cost);
  const conditionalBackground =
    props.score < props.cost ? "bg-red-900" : "bg-blue-900";
  const conditionalHoverBackground =
    props.score < props.cost ? "hover:bg-red-800" : "hover:bg-green-800";
  return (
    <button
      className={` w-60 rounded text-white font-bold  p-4 ${conditionalBackground}`}
      onClick={() => {
        props.onClick(props.power, props.cost, props.index);
      }}
    >
      {props.name} : {buildingCost} ({props.buildingCount})
    </button>
  );
};

export default Building;
