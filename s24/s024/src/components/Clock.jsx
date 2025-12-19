import { useEffect, useState } from "react";

const Clock = () => {
  const [now, setNow] = useState(new Date());

  console.log("rendered");
  //   setInterval(() => {
  //     console.log("inside interval");
  //     setNow(new Date());
  //   }, 1000);

  useEffect(() => {
    console.log("inside useEffect");
    const interval = setInterval(() => {
      console.log("inside interval");
      setNow(new Date());
    }, 1000);

    return () => {
      console.log("destroy");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      clock
      <div>{now.toISOString()}</div>
    </div>
  );
};

export default Clock;
