import { useReducer } from "react";
import { Box } from "../components";
import { reducer } from "../components/planner-reducer";
import { BuildingTypes } from "../RoundPlanner/BuildingTypes";
import { FinalResources } from "../RoundPlanner/FinalResources";
import { InitialResources } from "../RoundPlanner/InitialResources";
import { OpeningsType } from "./OpeningsType";

const initialState = {
  credits: "15",
  ore: "7",
  qic: "1",
  powerBowl3: "",
  buildings: [],
  totalCredits: "15",
  totalOre: "7",
  totalQic: "1",
  totalPowerBowl3: "",
  nextCredits: "",
  nextOre: "",
  nextQic: "",
  nextPowerBowl3: "",
};
export const StandardOpenings = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Box as="h2">Standard Openings</Box>
      <InitialResources state={state} dispatch={dispatch} />
      <OpeningsType dispatch={dispatch} />
      <BuildingTypes state={state} dispatch={dispatch} />
      <FinalResources state={state} dispatch={dispatch} />
    </>
  );
};
