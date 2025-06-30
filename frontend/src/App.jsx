import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Balais from "./pages/Balais";
import Cacho from "./pages/Cacho";
import Francisco from "./pages/Francisco";
import Galve from "./pages/Galve";
import Tarroza from "./pages/Tarroza";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/balais" element={<Balais />} />
        <Route path="/cacho" element={<Cacho />} />
        <Route path="/francisco" element={<Francisco />} />
        <Route path="/galve" element={<Galve />} />
        <Route path="/tarroza" element={<Tarroza />} />
      </Routes>
    </Router>
  );
}

export default App;



