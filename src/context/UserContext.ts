import { createContext } from "react";

type UserContextProps = {
  quantity: { id: number; value: number, name:string, imgUrl:string, price:number }[];
  // not sure about this, to add id, value in setQuantity
  setQuantity: React.Dispatch<React.SetStateAction<{
    id: number;
    value: number;
    name:string;
    imgUrl:string;
    price:number
}[]>>;
};

const initialUserContextValue: UserContextProps = {
  quantity: [{ id: 0, value: 0, name:'',imgUrl:'',price:0 }],
  setQuantity: () => {},
};

const UserContext = createContext<UserContextProps>(initialUserContextValue);
export default UserContext;
