import {
  Box,
  CreditsInput,
  Flex,
  OreInput,
  PowerBowl3Input,
  QICInput,
} from "../components";
import { ActionType, RoundPlannerProps } from "../components/planner-reducer";

export const InitialResources = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <>
      <Box as="h3">Initial Resources</Box>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <CreditsInput
            value={state.credits}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.Credits, value });
            }}
          />
          <OreInput
            value={state.ore}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.Ore, value });
            }}
          />
          <QICInput
            value={state.qic}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.QIC, value });
            }}
          />
          <PowerBowl3Input
            value={state.powerBowl3}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.PowerBowl3, value });
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};
