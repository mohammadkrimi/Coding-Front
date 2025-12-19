import Parent from "../components/Parent";

const C = () => {
  return (
    <div className="h-screen bg-green-500">
      <div>inside C</div>
      <Parent>a child of parent</Parent>
    </div>
  );
};

export default C;
