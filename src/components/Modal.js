import React from "react";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full  items-center justify-center">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-70">
        <div class="p-6 space-y-6">
          {props.children}
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Test paragraph 1
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Test paragraph 2
          </p>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={props.closeModal}
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
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
