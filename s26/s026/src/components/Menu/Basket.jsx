import { useContext, useMemo } from "react";
import { MenuContext } from "../../context/Menu/Context";
import { menu } from "../../utils/menu";

const Basket = () => {
  const { basket } = useContext(MenuContext);

  const totalPrice = useMemo(() => {
    return basket.reduce((acc, cur) => {
      const currentMenuItem = menu.find((item) => item.id == cur);
      return acc + currentMenuItem.price;
    }, 0);
  }, [basket]);

  return (
    <div className="border-b border-gray-300 p-2">
      <div className="flex justify-between items-center">
        <h1>
          Basket{" "}
          {!!basket.length && (
            <small className="opacity-65">({basket.length} items)</small>
          )}
        </h1>
        <div>{totalPrice}$</div>
      </div>
    </div>
  );
};

export default Basket;
