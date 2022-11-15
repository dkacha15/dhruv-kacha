import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Routes/Home/home";
import About from "./Routes/About/about";
import { AnimatePresence } from "framer-motion";

const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
