import "./App.css";

import BuildingList from "./components/BuildingList";
import { useEffect, useReducer, useState } from "react";
import Modal from "./components/Modal";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Button from "./components/UI/Button";
import buildings from "./store/buildings";
import { gameManager } from "./reducers/gameManager";

function App() {
  const savedGame = JSON.parse(localStorage.getItem("saved-game"));
  const initiateState = { score: 0, power: 1, buildings: [...buildings] };
  const [tickTime, setTickTime] = useState(1000);

  const [state, dispatch] = useReducer(gameManager, initiateState);

  // Set up time loop
  useEffect(() => {
    console.log("effect started");
    let tick = setInterval(() => {
      console.log("tick started");
      dispatch({ type: "updateScore" });
    }, tickTime);
    return () => {
      console.log("cleaning tick");
      clearInterval(tick);
    };
  }, [tickTime]);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const modalToggler = () => {
    console.log("toggling modal");
    setIsMenuVisible(!isMenuVisible);
  };

  const debug = () => {
    setTickTime(100);
    console.log("Changing tick");
    const timer = setInterval(() => {
      console.log("Changing tick back");
      setTickTime(1000);
      clearInterval(timer);
    }, 5000);
  };

  const saveGame = () => {
    localStorage.setItem("saved-game", JSON.stringify(state));
  };
  const loadGame = () => {
    if (savedGame == null) {
      return;
    }
    dispatch({
      type: "loadGame",
      ...savedGame,
    });
    // console.log("game loaded! ", savedGame);
  };

  return (
    <div className="App">
      <Button
        onClick={debug}
        className="p-3 basis-1/2 bg-blue-900 text-white  rounded "
      >
        Debug
      </Button>
      {isMenuVisible && (
        <Modal
          modalToggler={modalToggler}
          buildingList={state.buildings}
          score={state.score}
        />
      )}
      <div className="bg-slate-500  p-5  h-full ">
        <div className="bg-slate-900 border border-slate-900 rounded-lg shadow-lg grid grid-cols-1 grid-rows-[100px] gap-5 ">
          <Title message={state.playerMessage} />
          <Button
            onClick={modalToggler}
            className="bg-blue-800 p-5 font-bold text-white mx-5 mb-5 rounded content-center"
          >
            Powerups
          </Button>
          <div className="px-5 flex gap-5">
            <Button
              onClick={saveGame}
              className="p-3 basis-1/2 bg-blue-900 text-white  rounded "
            >
              Save
            </Button>

            <Button
              onClick={loadGame}
              className="p-3 basis-1/2 bg-red-900 text-white rounded"
            >
              Load
            </Button>
          </div>
          <Scoreboard state={state} dispatch={dispatch} />
          <BuildingList
            state={state}
            dispatch={dispatch}
            buildingList={state.buildings}
            score={state.score}
          ></BuildingList>
        </div>
      </div>
    </div>
  );
}

export default App;
