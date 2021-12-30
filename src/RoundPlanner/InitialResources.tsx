import { Box, Flex, Label, TextField } from "../components";
import { Resources } from "../constants";
import { ActionType, RoundPlannerProps } from "./reducer";

export const InitialResources = ({ state, dispatch }: RoundPlannerProps) => {
  return (
    <>
      <Box as="h3">Initial Resources</Box>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Box>
            <Label>{Resources.Credits}</Label>
            <Box>
              <TextField
                size="2"
                inputMode="numeric"
                pattern="[0-9]*"
                value={state.credits}
                onChange={({ target: { value } }) => {
                  dispatch({ type: ActionType.Credits, value });
                }}
              />
            </Box>
          </Box>
          <Box>
            <Label>{Resources.Ore}</Label>
            <Box>
              <TextField
                size="2"
                inputMode="numeric"
                pattern="[0-9]*"
                value={state.ore}
                onChange={({ target: { value } }) => {
                  dispatch({ type: ActionType.Ore, value });
                }}
              />
            </Box>
          </Box>
          <Box>
            <Label>{Resources.QIC}</Label>
            <Box>
              <TextField
                size="2"
                inputMode="numeric"
                pattern="[0-9]*"
                value={state.qic}
                onChange={({ target: { value } }) => {
                  dispatch({ type: ActionType.QIC, value });
                }}
              />
            </Box>
          </Box>
          <Box>
            <Label>{Resources.PowerBowl3}</Label>
            <Box>
              <TextField
                size="2"
                inputMode="numeric"
                pattern="[0-9]*"
                value={state.powerBowl3}
                onChange={({ target: { value } }) => {
                  dispatch({ type: ActionType.PowerBowl3, value });
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
