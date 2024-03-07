import React from "react";

const ItemModify = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <button className="border rounded-md px-2 py-1 text-2xl text-center bg-blue-400 text-white">
          -
        </button>
        <div className="mx-2">Items in Cart</div>
        <button className="border rounded-md px-2 py-1 text-2xl text-center bg-blue-400 text-white">
          +
        </button>
      </div>
      <button className="mt-4 border rounded-md p-3 bg-red-500 text-white">Remove</button>
    </div>
  );
};

export default ItemModify;
