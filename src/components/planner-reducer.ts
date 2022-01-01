import { sumBy } from "lodash";
import { Dispatch } from "react";
import { Resources } from "../constants";

export type BuildingType = {
  id: string;
  title: string;
  credits: string;
  ore: string;
  qic: string;
  powerBowl3: string;
};

export type RoundPlannerState = {
  credits: string;
  ore: string;
  qic: string;
  powerBowl3: string;
  buildings: BuildingType[];
  totalCredits: string;
  totalOre: string;
  totalQic: string;
  totalPowerBowl3: string;
};

export const ActionType = {
  Credits: Resources.Credits,
  Ore: Resources.Ore,
  QIC: Resources.QIC,
  PowerBowl3: Resources.PowerBowl3,
  Buildings: "Buildings",
  AddBuilding: "AddBuilding",
  RemoveBuilding: "RemoveBuilding",
} as const;

export type Action =
  | { type: typeof ActionType.Credits; value: string }
  | { type: typeof ActionType.Ore; value: string }
  | { type: typeof ActionType.QIC; value: string }
  | { type: typeof ActionType.PowerBowl3; value: string }
  | { type: typeof ActionType.Buildings; value: BuildingType[] }
  | { type: typeof ActionType.AddBuilding; value: BuildingType }
  | { type: typeof ActionType.RemoveBuilding; value: string };

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
    case ActionType.Buildings: {
      return {
        ...state,
        buildings: action.value,
        totalCredits: String(sumBy(action.value, (it) => Number(it.credits))),
        totalOre: String(sumBy(action.value, (it) => Number(it.ore))),
        totalQic: String(sumBy(action.value, (it) => Number(it.qic))),
        totalPowerBowl3: String(
          sumBy(action.value, (it) => Number(it.powerBowl3))
        ),
      };
    }
    case ActionType.AddBuilding: {
      const buildings = [...state.buildings, action.value];
      return {
        ...state,
        buildings,
        totalCredits: String(sumBy(buildings, (it) => Number(it.credits))),
        totalOre: String(sumBy(buildings, (it) => Number(it.ore))),
        totalQic: String(sumBy(buildings, (it) => Number(it.qic))),
        totalPowerBowl3: String(
          sumBy(buildings, (it) => Number(it.powerBowl3))
        ),
      };
    }
    case ActionType.RemoveBuilding: {
      const buildings = state.buildings.filter((el) => el.id !== action.value);
      return {
        ...state,
        buildings,
        totalCredits: String(sumBy(buildings, (it) => Number(it.credits))),
        totalOre: String(sumBy(buildings, (it) => Number(it.ore))),
        totalQic: String(sumBy(buildings, (it) => Number(it.qic))),
        totalPowerBowl3: String(
          sumBy(buildings, (it) => Number(it.powerBowl3))
        ),
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