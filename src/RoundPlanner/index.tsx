import { useReducer } from "react";
import { Box } from "../components";
import { BuildingTypes } from "./BuildingTypes";
import { FinalResources } from "./FinalResources";
import { InitialResources } from "./InitialResources";
import { reducer } from "../components/planner-reducer";

const initialState = {
  credits: "",
  ore: "",
  qic: "",
  powerBowl3: "",
  buildings: [],
  totalCredits: "",
  totalOre: "",
  totalQic: "",
  totalPowerBowl3: "",
};

export const RoundPlanner = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Box as="h2">Round Planner</Box>
      <InitialResources state={state} dispatch={dispatch} />
      <BuildingTypes state={state} dispatch={dispatch} />
      <FinalResources state={state} dispatch={dispatch} />
    </>
  );
};
