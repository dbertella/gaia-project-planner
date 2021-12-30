import { sumBy } from "lodash";
import { Dispatch } from "react";
import { Resources } from "../constants";

export const initialState = {
  credits: "0",
  ore: "0",
  qic: "0",
  powerBowl3: "0",
  buildings: [] as BuildingType[],
  totalCredits: "0",
  totalOre: "0",
};
export type RoundPlannerState = typeof initialState;

export const ActionType = {
  Credits: Resources.Credits,
  Ore: Resources.Ore,
  QIC: Resources.QIC,
  PowerBowl3: Resources.PowerBowl3,
  AddBuilding: "AddBuilding",
  RemoveBuilding: "RemoveBuilding",
} as const;

type BuildingType = {
  id: string;
  title: string;
  credits: string;
  ore: string;
};

export type Action =
  | { type: typeof ActionType.Credits; value: string }
  | { type: typeof ActionType.Ore; value: string }
  | { type: typeof ActionType.QIC; value: string }
  | { type: typeof ActionType.PowerBowl3; value: string }
  | { type: typeof ActionType.AddBuilding; value: BuildingType }
  | { type: typeof ActionType.RemoveBuilding; value: string };

const getFinalField = (
  field: string,
  fieldName: "credits" | "ore",
  elements: BuildingType[]
) => String(Number(field) - sumBy(elements, (it) => Number(it[fieldName])));

export const reducer = (state: RoundPlannerState, action: Action) => {
  switch (action.type) {
    case ActionType.Credits:
      return {
        ...state,
        credits: action.value,
      };
    case ActionType.Ore:
      return {
        ...state,
        ore: action.value,
      };
    case ActionType.QIC:
      return {
        ...state,
        qic: action.value,
      };
    case ActionType.PowerBowl3:
      return {
        ...state,
        powerBowl3: action.value,
      };
    case ActionType.AddBuilding: {
      const buildings = [...state.buildings, action.value];
      return {
        ...state,
        buildings,
        totalCredits: String(sumBy(buildings, (it) => Number(it.credits))),
        totalOre: String(sumBy(buildings, (it) => Number(it.ore))),
      };
    }
    case ActionType.RemoveBuilding: {
      const buildings = state.buildings.filter((el) => el.id !== action.value);
      return {
        ...state,
        buildings,
        totalCredits: String(sumBy(buildings, (it) => Number(it.credits))),
        totalOre: String(sumBy(buildings, (it) => Number(it.ore))),
      };
    }

    default:
      throw new Error();
  }
};

export type RoundPlannerProps = {
  state: RoundPlannerState;
  dispatch: Dispatch<Action>;
};
