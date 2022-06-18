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
      <div className="pb-4">
        <Building
          {...building}
          key={building.name}
          onClick={powerHandler}
          index={index}
          score={props.score}
        />
      </div>
    );
  });
  return <div className="">{buildingList}</div>;
};

export default BuildingList;
