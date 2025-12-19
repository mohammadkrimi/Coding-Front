import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <ul className="home">
      <Hero />
      <Hero isSelected={true} />
      <Hero />
      <Hero />
    </ul>
  );
};

export default Home;
