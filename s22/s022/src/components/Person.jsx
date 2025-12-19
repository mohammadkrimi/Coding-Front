const Person = ({ person }) => {
  return (
    <li className={`person person--${person.job.toLowerCase()}`}>
      {person.job === "Designer" && "🖉"}
      {person.name}: {person.city}
      <br />
      {person.age > 30 ? <strong>Old</strong> : <div>young</div>}
    </li>
  );
};

export default Person;
