import { useState } from "react";
import { LangContext } from "./Context";

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("");

  const foo = () => console.log("foo");

  return <LangContext value={{ lang, setLang, foo }}>{children}</LangContext>;
};

export default LangProvider;
