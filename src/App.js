import "./App.css";

import BuildingList from "./components/BuildingList";
import { useEffect, useReducer, useState } from "react";
import buildings from "./store/buildings";
import Modal from "./components/Modal";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  const initiateState = { score: 0, power: 1, buildings: [...buildings] };

  function reducer(state, action) {
    switch (action.type) {
      case "updateScore":
        return { ...state, score: state.score + state.power };
      case "modifyPower":
        if (action.cost > state.score) {
          return { ...state };
        }
        const purchasedBuilding = { ...state.buildings[action.index] };
        const updatedBuilding = {
          ...purchasedBuilding,
          cost: purchasedBuilding.cost * purchasedBuilding.costIncrement,
          buildingCount: purchasedBuilding.buildingCount + 1,
        };
        console.log(updatedBuilding);
        const newBuildingList = state.buildings.map((building, index) => {
          if (index === action.index) {
            return { ...updatedBuilding };
          }
          return { ...building };
        });
        return {
          ...state,
          buildings: [...newBuildingList],
          score: state.score - action.cost,
          power: state.power + action.power,
        };
      case "loadGame":
        // console.log("loadGame triggered ", action);
        return {
          ...state,
          score: action.score,
          power: action.power,
          buuildings: action.buildings,
        };
      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, initiateState);

  // Set up time loop
  useEffect(() => {
    console.log("effect started");
    let tick = setInterval(() => {
      console.log("tick started");
      dispatch({ type: "updateScore" });
    }, 50);
    return () => {
      console.log("cleaning tick");
      clearInterval(tick);
    };
  }, []);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const modalToggler = () => {
    console.log("toggling modal");
    setIsMenuVisible(!isMenuVisible);
  };

  const handleSaveClick = () => {
    localStorage.setItem("saved-game", JSON.stringify(state));
    // console.log("game saved!");
  };
  const handleLoadClick = () => {
    const savedGame = JSON.parse(localStorage.getItem("saved-game"));
    dispatch({
      type: "loadGame",
      ...savedGame,
    });
    // console.log("game loaded! ", savedGame);
  };

  return (
    <div className="App">
      {isMenuVisible && <Modal closeModal={modalToggler} />}
      <div className="max-w-7xl ">
        <div className="flex items-center justify-center">
          <div class="bg-white shadow-xl rounded-lg ">
            <Title />
            <button
              onClick={handleSaveClick}
              class="w-60 rounded text-white font-bold p-4 bg-blue-800 mb-4"
              type="button"
            >
              Save
            </button>

            <BuildingList
              state={state}
              dispatch={dispatch}
              buildingList={state.buildings}
              score={state.score}
            ></BuildingList>
            <button
              onClick={handleLoadClick}
              class="w-60 rounded text-white font-bold p-4 bg-blue-800 mb-4"
              type="button"
            >
              Load
            </button>
            <Scoreboard state={state} dispatch={dispatch} />
            <button
              onClick={modalToggler}
              class="w-60 rounded text-white font-bold p-4 bg-blue-800 mb-4"
              type="button"
            >
              Powerups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
