import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Cookie = () => {
  const [name, setName] = useState(() => {
    return Cookies.get("name");
  });

  useEffect(() => {
    if (name) {
      Cookies.set("name", name);
    }
  }, [name]);

  return (
    <div>
      <h2>Cookie</h2>
      <button
        onClick={() => setName("jay")}
        className="px-3 py-1 cursor-pointer rounded-xl  bg-orange-400 mx-2"
      >
        Set Name to Jay
      </button>
      {name}
    </div>
  );
};

export default Cookie;
