import React, { useContext } from "react";
import UserContext from "../context/UserContext";

type ItemsProps = {
  id: number;
};

const ItemModify: React.FC<ItemsProps> = ({ id }) => {
  const { quantity, setQuantity } = useContext(UserContext);

  const handleAdd = (itemId: number) => {
    // Check if the item already exists in the cart
    const existingItem = quantity.find(item => item.id === itemId);

    if (existingItem) {
      // If the item already exists, update its quantity
      const updatedQuantity = quantity.map(item =>
        item.id === itemId ? { ...item, value: item.value + 1 } : item
      );
      setQuantity(updatedQuantity);
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      setQuantity([...quantity, { id: itemId, value: 1 }]);
    }
  };

  return (
    <div className="text-center">
      {quantity.some(thisId => thisId.id === id) ? (
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
      ) : (
        <button
          className="border rounded-md px-4 py-2 text-lg text-center bg-blue-400 text-white w-full mt-3"
          onClick={() => handleAdd(id)}
        >
          &#43; Add To Cart
        </button>
      )}
    </div>
  );
};

export default ItemModify;
