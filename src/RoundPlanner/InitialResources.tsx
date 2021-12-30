import { Box, Flex } from "../components";
import { NumberField } from "../components/Forms/NumberField";
import { Resources } from "../constants";
import { ActionType, RoundPlannerProps } from "./reducer";

export const InitialResources = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <>
      <Box as="h3">Initial Resources</Box>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <NumberField
            label={Resources.Credits}
            value={state.credits}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.Credits, value });
            }}
          />
          <NumberField
            label={Resources.Ore}
            value={state.ore}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.Ore, value });
            }}
          />
          <NumberField
            label={Resources.QIC}
            value={state.qic}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.QIC, value });
            }}
          />
          <NumberField
            label={Resources.PowerBowl3}
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
