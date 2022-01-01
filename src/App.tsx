import { Route, Routes } from "react-router-dom";
import { Box, NavBar } from "./components";
import { Conversion } from "./Conversion";
import { RoundPlanner } from "./RoundPlanner";

function App() {
  return (
    <>
      <Box
        css={{
          p: "$2",
          m: "0 auto",
          maxWidth: 450,
          minHeight: "calc(100vh - 50px)",
        }}
      >
        <h1>A Gaia Project Planner</h1>
        <Routes>
          <Route path="/" element={<RoundPlanner />} />
          <Route path="conversion" element={<Conversion />} />
        </Routes>
      </Box>
      <NavBar />
    </>
  );
}

export default App;
