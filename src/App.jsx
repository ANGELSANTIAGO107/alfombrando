import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Layout/Home.jsx";
import Products from "./Views/Products.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
