import React, { useContext, useState } from "react";
import cart from "../../public/assets/shopping.svg";
import { NavLink, useNavigate } from "react-router-dom";
import bars from "../../public/assets/bars.svg";
import UserContext from "../context/UserContext";

interface NavProps {
  handleBarOpen: () => void;
}
const NavBar: React.FC<NavProps> = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleBarOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { quantity } = useContext(UserContext);
  let count = 0;
  quantity.map((thisId) => (count += thisId.value));

  const onCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="bg-yellow-100 sticky top-0">
      <div className="flex justify-between py-6 px-16 w-full items-center  ">
        <div className="flex text-2xl gap-4 max-[767px]:invisible">
          <img
            src={bars}
            alt="bars"
            className="w-8 md:invisible max-[767px]:visible"
            onClick={handleBarOpen}
          />
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/store"}>Store</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>

        <div className="flex relative" onClick={onCartClick}>
          <img
            src={cart}
            alt="cart"
            className="w-12 rounded-2xl bg-[#192841] opacity-45 border border-[#192841] p-2 text-center hover:bg-[#192841] hover:opacity-100 hover:cursor-pointer"
          />
          <div className="absolute bottom-0 right-0 translate-x-[25%] translate-y-[25%] w-7 h-7 border rounded-full bg-red-400 text-center font-bold text-white max-[400px]:w-5 max-[400px]:h-5 max-[400px]:text-center max-[400px]:text-xs">
            {count}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col bg-slate-200 pl-12">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/store"}>Store</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
