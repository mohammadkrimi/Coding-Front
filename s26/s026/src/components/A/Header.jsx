import { useContext } from "react";
import { LangContext } from "../../context/Lang/Context";

const Header = () => {
  const { lang } = useContext(LangContext);

  return (
    <header className="bg-blue-600">
      <div>Header</div>
      <div>Selected Language: {lang}</div>
    </header>
  );
};

export default Header;
