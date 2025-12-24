import useCounter from "./hooks/timer.jsx";

function App () {
  const counter = useCounter();

  return <h1>{counter}</h1>
}

export default App;