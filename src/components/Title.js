import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className="bg-slate-800 rounded py-5 flex text-white text-3xl gap-2 font-bold items-center justify-center">
      <FontAwesomeIcon icon={faBuildingCircleCheck} />
      <h1>Building builder</h1>
    </div>
  );
};

export default Title;
