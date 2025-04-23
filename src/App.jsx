import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Analysis from "./Components/Analysis";
import ComparisonPage from "./Components/ComparisonPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/comparison" element={<ComparisonPage />} />
      </Routes>
    </>
  );
}

export default App;
