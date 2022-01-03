import { useEffect, useReducer } from "react";
import { Box, Button, Flex } from "../components";
import { BuildingTypes } from "./BuildingTypes";
import { FinalResources } from "./FinalResources";
import { InitialResources } from "./InitialResources";
import { ActionType, reducer } from "../components/planner-reducer";

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
  nextCredits: "",
  nextOre: "",
  nextQic: "",
  nextPowerBowl3: "",
};

const LOCAL_STORAGE_KEY = "gaia-planner";

const initializer = (initialValue = initialState) => {
  const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  return persistedState ? JSON.parse(persistedState) : initialValue;
};

export const RoundPlanner = () => {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <>
      <Flex justify="between" align="center">
        <Box as="h2">Round Planner</Box>
        <Button
          variant="red"
          onClick={() =>
            dispatch({ type: ActionType.Reset, value: initialState })
          }
        >
          Reset Plan
        </Button>
      </Flex>
      <InitialResources state={state} dispatch={dispatch} />
      <BuildingTypes state={state} dispatch={dispatch} />
      <FinalResources state={state} dispatch={dispatch} />
      {/* <NextRoundResources state={state} dispatch={dispatch} /> */}
    </>
  );
};
