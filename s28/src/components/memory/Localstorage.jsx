import { useEffect, useState } from "react";

const Localstorage = () => {
  const [theme, setTheme] = useState(() => {
    const themeOnLocalstorage = localStorage.getItem("theme");
    if (themeOnLocalstorage) return themeOnLocalstorage;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div>
      <h2>Localstorage</h2>
      <button
        onClick={() => setTheme("light")}
        className="px-3 py-1 cursor-pointer rounded-xl bg-gray-200 text-gray-900 mx-2"
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="px-3 py-1 cursor-pointer rounded-xl bg-gray-900 text-gray-200 mx-2"
      >
        Dark
      </button>
      <br />
      current Theme: {JSON.stringify(theme)}
    </div>
  );
};

export default Localstorage;
