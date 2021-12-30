import { Box, Flex, NumberField } from "../components";
import { Resources } from "../constants";
import { RoundPlannerProps } from "./reducer";

export const FinalResources = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <>
      <Box as="h3">Final Resources</Box>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <NumberField
            label={Resources.Credits}
            readOnly
            value={Number(state.credits) - Number(state.totalCredits)}
          />
          <NumberField
            label={Resources.Ore}
            readOnly
            value={Number(state.ore) - Number(state.totalOre)}
          />
          <NumberField label={Resources.QIC} readOnly value={state.qic} />
          <NumberField
            label={Resources.PowerBowl3}
            readOnly
            value={state.powerBowl3}
          />
        </Flex>
      </Flex>
    </>
  );
};
