import { useReducer } from "react";
import Cookie from "../components/memory/Cookie";
import Localstorage from "../components/memory/Localstorage";
import Sessionstorage from "../components/memory/Sessionstorage";

const defaultValue = {
  count: 2,
};
const countReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        count: state.count + action.step,
      };
    case "remove":
      if (state.count !== 0) {
        return {
          count: state.count - action.step,
        };
      }
      return {
        count: 0,
      };
    default:
      break;
  }
};

const Memory = () => {
  const [state, dispatch] = useReducer(countReducer, defaultValue);

  return (
    <div className="h-screen bg-amber-100 p-2">
      {state.count}
      <br />
      <button
        onClick={() => dispatch({ type: "add", step: 10 })}
        className="px-3 py-1 cursor-pointer rounded-xl bg-blue-500 text-gray-100 mx-2"
      >
        add
      </button>
      <button
        onClick={() => dispatch({ type: "add", step: 5 })}
        className="px-3 py-1 cursor-pointer rounded-xl bg-green-500 text-gray-100 mx-2"
      >
        add
      </button>
      <button
        onClick={() => dispatch({ type: "remove", step: 1 })}
        className="px-3 py-1 cursor-pointer rounded-xl bg-red-500 text-gray-900 mx-2"
      >
        remove
      </button>
      <br />
      <hr />
      <br />
      <Localstorage />
      <br />
      <hr />
      <br />
      <Sessionstorage />
      <br />
      <hr />
      <br />
      <Cookie />
    </div>
  );
};

export default Memory;
