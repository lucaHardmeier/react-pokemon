import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import { NotFound } from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
