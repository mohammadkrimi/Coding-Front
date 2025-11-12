import { useState, useEffect, useMemo } from "react";

const State = () => {
  const [count, setCount] = useState(10);
  // const [doubleCount, setDoubleCount] = useState(count * 2);
  const [name, setName] = useState("");

  const onButtonClick = () => {
    console.log("before setState", count);
    setCount(count + 1);
    setName("Jay");
    console.log("after setState", count);
  };
  const onNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("inside useEffect", count);
    // setDoubleCount(count * 2);
  }, [count]);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <label htmlFor="firstNameId">Your Name</label>
      <input
        value={name}
        id="firstNameId"
        type="text"
        name="first_name"
        placeholder="please type your Name"
        onChange={onNameChange}
      />
      <hr />
      {/* <div>
        color
        <input name="color" value="red" type="radio" />
        <input name="color" value="blue" type="radio" />
        <input name="color" value="green" type="radio" />
      </div>
      <div>
        options
        <input name="option" value="radio" type="checkbox" />
        <input name="option" value="gps" type="checkbox" />
        <input name="option" value="sunroof" type="checkbox" />
      </div> */}
      <button onClick={onButtonClick}>add</button>
      <div>
        {count} * 2 = {doubleCount}| {name}
      </div>
    </div>
  );
};

export default State;
