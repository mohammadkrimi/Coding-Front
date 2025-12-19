import { useContext } from "react";
import { MenuContext } from "../../context/Menu/Context";

const Item = ({ item }) => {
  const { addToBasket } = useContext(MenuContext);
  return (
    <li className="flex gap-2">
      <button onClick={() => addToBasket(item.id)}>+</button>
      <div className="flex justify-between items-center grow gap-3">
        <div>{item.name}</div>
        <div className="h-px grow bg-gray-300" />
        <div>{item.price}$</div>
      </div>
    </li>
  );
};

export default Item;
