import { useNavigate } from "react-router";

const B = () => {
  const navigate = useNavigate();

  const onClick = () => {
    console.log("clicked");
    navigate("/a");
  };

  return (
    <div className="h-screen bg-red-500">
      <div>inside B</div>
      <button onClick={onClick} className="bg-red-800 p-2 m-2 rounded">
        Go to page A
      </button>
    </div>
  );
};

export default B;
