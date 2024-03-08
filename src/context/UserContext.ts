import { createContext } from "react";

type UserContextProps = {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const initialUserContextValue: UserContextProps = {
    quantity: 0,
    setQuantity: () => {}
};

const UserContext = createContext<UserContextProps>(initialUserContextValue)
export default UserContext;