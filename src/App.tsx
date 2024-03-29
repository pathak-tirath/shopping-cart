import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Store } from "./pages";
import NavBar from "./components/NavBar";
import UserContext from "./context/UserContext";
import Cart from "./pages/Cart";

const App:React.FC = () => {
  const [quantity,setQuantity] = useState([{id:0, value:0, name:'', imgUrl:'', price:0}])
  return (
    <UserContext.Provider value={{quantity,setQuantity}}>
    <NavBar handleBarOpen={function (): void {
        throw new Error("Function not implemented.");
      } } />
    <div className="px-16 bg-orange-50 h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </UserContext.Provider>
  );
};

export default App;
