// import State from "./components/State";
// import Search from "./components/Search";
// import WordCount from "./components/WordCount";

import { useState } from "react";
import { Faker, fa, base } from "@faker-js/faker";
import Clock from "./components/Clock";

const faker = new Faker({
  locale: [base, fa]
});
const text = faker.lorem.paragraph();

const App = () => {
  const [clockIsVisible, setClockIsVisible] = useState(false);

  const onToggleClick = () => {
    setClockIsVisible(!clockIsVisible);
  };

  return (
    <>
      {text}
      <br />
      {clockIsVisible && <Clock />}
      <button onClick={onToggleClick}>Toggle</button>
      {/* <State /> */}
      {/* <Search /> */}
      {/* <WordCount /> */}
    </>
  );
};

export default App;
