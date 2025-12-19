import MenuProvider from "../context/Menu/Provider";
import Basket from "../components/Menu/Basket";
import Item from "../components/Menu/Item";
import { menu } from "../utils/menu";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <MenuProvider>
        <Basket />
        <ul>
          {menu.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </MenuProvider>
    </div>
  );
};

export default Menu;
