import {
  Box,
  CreditsInput,
  Flex,
  OreInput,
  PowerBowl3Input,
  QICInput,
} from "../components";
import { RoundPlannerProps } from "../components/planner-reducer";

export const FinalResources = ({ state }: RoundPlannerProps) => {
  return (
    <>
      <Box as="h3">Final Resources</Box>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <CreditsInput
            readOnly
            value={Number(state.credits) - Number(state.totalCredits)}
          />
          <OreInput
            readOnly
            value={Number(state.ore) - Number(state.totalOre)}
          />
          <QICInput
            readOnly
            value={Number(state.qic) - Number(state.totalQic)}
          />
          <PowerBowl3Input
            readOnly
            value={Number(state.powerBowl3) - Number(state.totalPowerBowl3)}
          />
        </Flex>
      </Flex>
    </>
  );
};
