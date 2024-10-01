import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Layout/Home.jsx";
import Products from "./Views/Products.jsx";
import Services from "./Views/Services.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Services/:id" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
