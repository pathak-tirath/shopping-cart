import storeItems from "../data/items.json";

import StoreItem from "../components/StoreItem";


const Store = () => {
  return (
    <div className="pt-6 ml-12">
      <div className="font-medium text-3xl">Store</div>
      <div className="flex flex-wrap">
        {storeItems.map((item) => {
          return (
            <div key={item.id} className="mt-2 md:flex md:flex-col md:mr-14 gap-2">
              <StoreItem {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
