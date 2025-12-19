import { useContext } from "react";
import { LangContext } from "../../context/Lang/Context";

const Form = () => {
  const { lang, setLang } = useContext(LangContext);

  const onSetLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <div>
      <h2>Select Language | lang: {lang}</h2>
      <button
        onClick={() => onSetLang("fa")}
        className={`border mx-2 px-2 ${lang === "fa" && "bg-blue-200"}`}
      >
        FA
      </button>
      <button
        onClick={() => onSetLang("en")}
        className={`border mx-2 px-2 ${lang === "en" && "bg-blue-200"}`}
      >
        EN
      </button>
    </div>
  );
};

export default Form;
