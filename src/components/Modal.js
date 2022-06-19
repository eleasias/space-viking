import React from "react";
import ReactDOM from "react-dom";
import PowerUpList from "./PowerUpList";

const ModalOverlay = (props) => {
  const powerUpClickHandler = (type, cost, power, building) => {
    console.log(type, cost, power, building);
  };
  return (
    <div className="p-5 bg-slate-400 fixed top-0 right-0 left-0 z-10 h-full">
      <button onClick={props.modalToggler}>Close</button>
      <div className="bg-slate-800 border border-slate-900 rounded-lg shadow-lg z-20 grid grid-cols-1 gap-1 text-white overflow-auto">
        <PowerUpList
          buildingList={props.buildingList}
          buyPowerUp={powerUpClickHandler}
          score={props.score}
        />
      </div>
      {/* <div onClick={props.modalToggler} className="bg-white h-full"></div> */}
    </div>
  );
};

const portalElement = document.getElementById("modal-root");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay
          modalToggler={props.modalToggler}
          buildingList={props.buildingList}
          score={props.score}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
