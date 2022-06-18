import React from "react";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div className="max-w-7xl items-center justify-center  bg-white shadow-xl rounded-lg">
        <div className="p-6 space-y-6">
          {props.children}
          <h1>Hello there</h1>
        </div>
      </div>

      <div
        onClick={props.closeModal}
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>
    </div>
  );
};

const portalElement = document.getElementById("modal-root");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.closeModal}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
