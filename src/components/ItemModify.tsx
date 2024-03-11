import React, { useContext } from "react";
import UserContext from "../context/UserContext";

type ItemsProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

const ItemModify: React.FC<ItemsProps> = ({ id, name, imgUrl, price }) => {
  const { quantity, setQuantity } = useContext(UserContext);

  const handleAdd = (itemId: number) => {
    const existingItem = quantity.find((item) => item.id === itemId);

    if (existingItem) {
      const updatedQuantity = quantity.map((item) =>
        item.id === itemId
          ? {
              ...item,
              value: item.value + 1,
              name: item.name,
              imgUrl: item.imgUrl,
              price: (item.price += price),
            }
          : item
      );
      setQuantity(updatedQuantity);
    } else {
      setQuantity([
        ...quantity,
        {
          id: itemId,
          value: 1,
          name: name,
          imgUrl: imgUrl,
          price: price,
        },
      ]);
    }
  };

  const handleSubtract = (itemId: number) => {
    const existingItem = quantity.find((item) => item.id === itemId);

    if (existingItem) {
      const updatedQuantity = quantity
        .map((item) =>
          item.id === itemId
            ? { ...item, value: item.value - 1, price: item.price - price }
            : item
        )
        .filter((item) => item.value !== 0);
      setQuantity(updatedQuantity);
    } else {
      setQuantity([
        ...quantity,
        { id: itemId, value: 0, name: "", imgUrl: "", price: 0 },
      ]);
    }
  };

  const handleRemove = (itemId: number) => {
    const existingItem = quantity.find((item) => item.id === itemId);
    if (existingItem) {
      setQuantity(quantity.filter((item) => item.id !== itemId));
    }
  };

  return (
    <div className="text-center">
      {quantity.some((thisId) => thisId.id === id) &&
      quantity.find((item) => item.id === id)?.value !== 0 ? (
        <>
          <div className="flex items-center justify-center">
            <button
              className="border rounded-md px-2 py-1 text-2xl text-center bg-blue-400 text-white"
              onClick={() => handleSubtract(id)}
            >
              -
            </button>
            <div className="mx-2">
              {quantity.find((item) => item.id === id)?.value || 0} Items in
              Cart
            </div>
            <button
              className="border rounded-md px-2 py-1 text-2xl text-center bg-blue-400 text-white"
              onClick={() => handleAdd(id)}
            >
              +
            </button>
          </div>
          <button
            className="mt-4 border rounded-md p-3 bg-red-500 text-white"
            onClick={() => handleRemove(id)}
          >
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
