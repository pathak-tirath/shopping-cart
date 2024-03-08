import { useContext } from "react";
import UserContext from "../context/UserContext";

const ItemModify = () => {
  const { quantity } = useContext(UserContext);

  return (
    <div className="text-center">
      {quantity === 0 ? (
        <button className="border rounded-md px-4 py-2 text-lg text-center bg-blue-400 text-white w-full mt-3">
          &#43; Add To Cart
        </button>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <button className="border rounded-md px-2 py-1 text-2xl text-center bg-blue-400 text-white">
              -
            </button>
            <div className="mx-2">Items in Cart</div>
            <button className="border rounded-md px-2 py-1 text-2xl text-center bg-blue-400 text-white">
              +
            </button>
          </div>
          <button className="mt-4 border rounded-md p-3 bg-red-500 text-white">
            Remove
          </button>
        </>
      )}
    </div>
  );
};

export default ItemModify;
