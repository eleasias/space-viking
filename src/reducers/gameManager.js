export function gameManager(state, action) {
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
        buildings: action.buildings,
      };
    default:
      return { ...state };
  }
}
