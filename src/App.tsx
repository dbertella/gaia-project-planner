import { Box } from "./components";
import { Conversion } from "./Conversion";
import { RoundPlanner } from "./RoundPlanner";

function App() {
  return (
    <Box
      css={{
        m: "0 auto",
        maxWidth: 450,
      }}
    >
      <h1>A Gaia Project Planner</h1>
      <Conversion />
      <RoundPlanner />
    </Box>
  );
}

export default App;
