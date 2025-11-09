import Title from "./components/Title";
import Person from "./components/Person";
import { people } from "./utils";

const App = () => {
  return (
    <>
      <Title text={`people: ${people.length}`} />
      {/* <h1>People: {people.length}</h1> */}
      <ul>
        {people.map((person) => {
          return <Person key={person.id} person={person} />;
          // return (
          //   <li key={person.id} className="person" style={{ color: "red" }}>
          //     {person.name}: {person.city}
          //     <br />
          //     {person.age > 30 ? <strong>Old</strong> : <div>young</div>}
          //   </li>
          // );
        })}
      </ul>
    </>
  );
};

export default App;
