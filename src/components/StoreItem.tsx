import React from "react";
import {FormatCurrency} from "../utils/FormatCurrency";
import ItemModify from "./ItemModify";

type storageItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem: React.FC<storageItemProps> = ({ id, name, imgUrl, price }) => {
  const formattedPrice = FormatCurrency({price})
 
  return (
    <>
      <div className="mt-6">
        <img src={imgUrl} alt="Images" className="w-96 h-96 object-cover" />
        <div className="flex justify-between mt-2">
          <div>{name}</div>
          <div>
          {formattedPrice}
          </div>
        </div>
      </div>
      <ItemModify id={id} name={name} imgUrl={imgUrl} price={price} />
    </>
  );
};

export default StoreItem;
