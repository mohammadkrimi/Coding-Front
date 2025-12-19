import { useEffect, useState } from "react";

const Sessionstorage = () => {
  const [count, setCount] = useState(() => {
    return sessionStorage.getItem("count") || 0;
  });

  useEffect(() => {
    if (count) {
      sessionStorage.setItem("count", count);
    }
  }, [count]);

  return (
    <div>
      <h2>Sessionstorage</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 cursor-pointer rounded-xl  bg-orange-400 mx-2"
      >
        Increment
      </button>
      {count}
    </div>
  );
};

export default Sessionstorage;
