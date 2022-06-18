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
      <div key={building.name} className="">
        <Building
          {...building}
          onClick={powerHandler}
          index={index}
          score={props.score}
        />
      </div>
    );
  });
  return <div className="justify-center m-5 rounded ">{buildingList}</div>;
};

export default BuildingList;
