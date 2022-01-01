import { Box, Flex, NumberField } from "../components";
import { Resources } from "../constants";
import { RoundPlannerProps } from "./reducer";

export const FinalResources = ({ state }: RoundPlannerProps) => {
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
          <NumberField
            label={Resources.QIC}
            readOnly
            value={Number(state.qic) - Number(state.totalQic)}
          />
          <NumberField
            label={Resources.PowerBowl3}
            readOnly
            value={Number(state.powerBowl3) - Number(state.totalPowerBowl3)}
          />
        </Flex>
      </Flex>
    </>
  );
};
