import React from "react";
import FormatCurrency from "../utils/FormatCurrency";

type storageItemProps = {
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem: React.FC<storageItemProps> = ({ name, imgUrl, price }) => {
  return (
    <div className="mt-6">
      <img src={imgUrl} alt="Images" className="w-96 h-96 object-cover" />
      <div className="flex justify-between mt-2">
        <div>{name}</div>
        <div>
          <FormatCurrency price={price} />
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
