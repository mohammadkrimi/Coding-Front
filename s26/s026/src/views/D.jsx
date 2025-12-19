import { useLocation, useParams, useSearchParams } from "react-router";

const D = () => {
  const location = useLocation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("class"));
  // console.log("location", location);

  return (
    <div className="h-screen bg-purple-500">
      <div>inside D</div>
      <div>Id is {id}</div>
    </div>
  );
};

export default D;
