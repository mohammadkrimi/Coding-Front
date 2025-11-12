import { people } from "../utils/index";
import { useMemo, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const onChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  const result = useMemo(() => {
    return people.filter((person) =>
      person.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
  return (
    <div>
      <div>
        <input
          value={query}
          onChange={onChangeQuery}
          name="name"
          type="text"
          placeholder="Search your name"
        />
      </div>
      <div>
        <ul>
          {result.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
