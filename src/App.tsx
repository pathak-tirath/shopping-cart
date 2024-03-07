import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Store } from "./pages";
import NavBar from "./components/NavBar";
const App:React.FC = () => {
  return (
    <>
    <NavBar handleBarOpen={function (): void {
        throw new Error("Function not implemented.");
      } } />
    <div className="px-16 bg-orange-50 h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
