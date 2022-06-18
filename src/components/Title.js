import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className="bg-violet-600 border-violet-900 border-b p-4 m-4 rounded hover:bg-violet-900">
      <h1 className="text-white font-bold text-3xl">
        <FontAwesomeIcon icon={faBuildingCircleCheck} className="mr-2" />
        Building builder
      </h1>
    </div>
  );
};

export default Title;
