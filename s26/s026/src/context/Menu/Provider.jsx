import { useState } from "react";
import { MenuContext } from "./Context";

const MenuProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (newItem) => {
    setBasket([...basket, newItem]);
  };

  return <MenuContext value={{ basket, addToBasket }}>{children}</MenuContext>;
};
export default MenuProvider;
