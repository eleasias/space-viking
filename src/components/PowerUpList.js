import React from "react";

const PowerUpList = (props) => {
  let tempArray = [];

  const buildings = [...props.buildingList];
  for (let j = 0; j < buildings.length; j++) {
    let buildingName = buildings[j].name;
    for (let i = 0; i < buildings[j].powerups.length; i++) {
      tempArray.push({ buildName: buildingName, ...buildings[j].powerups[i] });
    }
  }

  const powerUpList = tempArray.map((powerup, index) => {
    if (powerup.enabled || powerup.cost > props.score) {
      return (
        <React.Fragment key={`${powerup.name}-${index}`}> </React.Fragment>
      );
    }
    return (
      <button
        key={`${powerup.name}-${index}`}
        className={`rounded grid-cols-2 grid-flow-row min-w-full p-2 grid grid-rows-2 `}
        onClick={() => {
          props.buyPowerUp(
            powerup.buildName,
            powerup.type,
            powerup.cost,
            powerup.value
          );
        }}
      >
        <span className="text-left bg-green-900 col-span-2 inline-block font-bold">
          {powerup.name} for {powerup.buildName}
        </span>

        <span className="text-left inline-block bg-red-900 ">
          {powerup.cost}{" "}
        </span>
        <span className=" text-right inline-block bg-yellow-900">
          {powerup.value} {powerup.type}
        </span>
      </button>
    );
  });

  return (
    <div className="grid grid-cols-1 grid-rows-auto gap-1">{powerUpList}</div>
  );
};

export default PowerUpList;
