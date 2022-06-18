import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className="m-5 p-5 bg-slate-800 rounded">
      <h1 className="text-white text-3xl font-bold">
        <FontAwesomeIcon icon={faBuildingCircleCheck} className="mr-2" />
        Building builder
      </h1>
    </div>
  );
};

export default Title;
