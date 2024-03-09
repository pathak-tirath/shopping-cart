import { createContext } from "react";

type UserContextProps = {
  quantity: { id: number; value: number }[];
  setQuantity: React.Dispatch<React.SetStateAction<{
    id: number;
    value: number;
}[]>>;
};

const initialUserContextValue: UserContextProps = {
  quantity: [{ id: 0, value: 0 }],
  setQuantity: () => {},
};

const UserContext = createContext<UserContextProps>(initialUserContextValue);
export default UserContext;
