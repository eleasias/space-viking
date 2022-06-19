import React from "react";
import Building from "./Building";

const BuildingList = (props) => {
  const tempBuildingArray = [...props.buildingList];

  const powerHandler = (power, cost, index) => {
    props.dispatch({
      type: "modifyPower",
      power: power,
      cost: cost,
      index: index,
    });
  };

  const buildingList = tempBuildingArray.map((building, index) => {
    return (
      <div key={building.name}>
        <Building
          {...building}
          onClick={powerHandler}
          index={index}
          score={props.score}
        />
      </div>
    );
  });
  return (
    <div className="rounded px-5 flex flex-col flex-wrap gap-2">
      {buildingList}
    </div>
  );
};

export default BuildingList;
