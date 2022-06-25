import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Title = (props) => {
  return (
    <div className="bg-slate-800 rounded py-5 flex text-white gap-2 font-bold items-center flex-col justify-center">
      <div className="text-3xl flex flex-row gap-2 justify-center items-center">
        <FontAwesomeIcon icon={faBuildingCircleCheck} />
        <h1 className="">Building builder</h1>
      </div>

      <p>{props.message}</p>
    </div>
  );
};

export default Title;
