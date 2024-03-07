import React from "react";
import storeItems from "../data/items.json";
import FormatCurrency from "../utils/FormatCurrency";

const Store = () => {
  return (
    <div className="pt-6 ml-12">
      <div className="font-medium text-3xl">Store</div>
      <div className="flex flex-wrap">
        {storeItems.map((item) => {
          return (
            <div className="mt-2 flex flex-col w-4/12 ">
              <img src={item.imgUrl} alt="Images" className="w-96 h-96 object-cover" />
              <div className="flex justify-between w-10/12">
                <div>{item.name}</div>
                <div><FormatCurrency price={item.price} /></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
