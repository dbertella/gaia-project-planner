import { Box, Flex, NumberField } from "../components";
import { Resources } from "../constants";
import { ActionType, RoundPlannerProps } from "../components/planner-reducer";

export const NextRoundResources = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <>
      <Box as="h3">Estimate Resources</Box>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <NumberField
            label={Resources.Credits}
            value={state.nextCredits}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.NextCredits, value });
            }}
          />
          <NumberField
            label={Resources.Ore}
            value={state.nextOre}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.NextOre, value });
            }}
          />
          <NumberField
            label={Resources.QIC}
            value={state.nextQic}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.NextQIC, value });
            }}
          />
          <NumberField
            label={Resources.PowerBowl3}
            value={state.nextPowerBowl3}
            onChange={({ target: { value } }) => {
              dispatch({ type: ActionType.NextPowerBowl3, value });
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};
