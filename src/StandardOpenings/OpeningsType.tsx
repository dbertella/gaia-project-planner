import { Box, Button, Flex, Label } from "../components";
import { v4 as uuid } from "uuid";
import {
  RoundPlannerProps,
  BuildingType,
  ActionType,
} from "../components/planner-reducer";
import {
  STANDARD_OPENING_1,
  STANDARD_OPENING_2,
  STANDARD_OPENING_3,
  STANDARD_OPENING_4,
  STANDARD_OPENING_5,
} from "../constants";

const withUuid = (building: Omit<BuildingType, "id">) => ({
  ...building,
  id: uuid(),
});

export const OpeningsType = ({
  dispatch,
}: {
  dispatch: RoundPlannerProps["dispatch"];
}) => (
  <Box>
    <h2>Pre-fill Openings</h2>
    <Flex gap="1">
      <Button
        onClick={() => {
          window.scrollTo({ top: 10000, behavior: "smooth" });
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_1.map(withUuid),
          });
        }}
      >
        RL+TS+M
      </Button>
      <Button
        onClick={() => {
          window.scrollTo({ top: 10000, behavior: "smooth" });
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_2.map(withUuid),
          });
        }}
      >
        A+M
      </Button>
      <Button
        onClick={() => {
          window.scrollTo({ top: 10000, behavior: "smooth" });
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_3.map(withUuid),
          });
        }}
      >
        RL+M+M+M+M
      </Button>
      <Button
        onClick={() => {
          window.scrollTo({ top: 10000, behavior: "smooth" });
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_4.map(withUuid),
          });
        }}
      >
        PI+RL
      </Button>
      <Button
        onClick={() => {
          window.scrollTo({ top: 10000, behavior: "smooth" });
          dispatch({
            type: ActionType.Buildings,
            value: STANDARD_OPENING_5.map(withUuid),
          });
        }}
      >
        PI+TS+M
      </Button>
    </Flex>
  </Box>
);
