import Article from "../components/A/Article";
import Header from "../components/A/Header";
import LangProvider from "../context/Lang/Provider";

const A = () => {
  return (
    <div className="h-screen bg-blue-500">
      <LangProvider>
        <div>inside A</div>
        <Header />
        <Article />
      </LangProvider>
    </div>
  );
};

export default A;
