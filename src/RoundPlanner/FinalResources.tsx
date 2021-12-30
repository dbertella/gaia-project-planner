import { Box, Flex, Label, TextField } from "../components";
import { Resources } from "../constants";
import { RoundPlannerProps } from "./reducer";

export const FinalResources = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <>
      <Box as="h3">Final Resources</Box>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Box>
            <Label>{Resources.Credits}</Label>
            <Box>
              <TextField
                size="2"
                readOnly
                value={Number(state.credits) - Number(state.totalCredits)}
              />
            </Box>
          </Box>
          <Box>
            <Label>{Resources.Ore}</Label>
            <Box>
              <TextField
                size="2"
                readOnly
                value={Number(state.ore) - Number(state.totalOre)}
              />
            </Box>
          </Box>
          <Box>
            <Label>{Resources.QIC}</Label>
            <Box>
              <TextField size="2" readOnly value={state.qic} />
            </Box>
          </Box>
          <Box>
            <Label>{Resources.PowerBowl3}</Label>
            <Box>
              <TextField size="2" readOnly value={state.powerBowl3} />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
