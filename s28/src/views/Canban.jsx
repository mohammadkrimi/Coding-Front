import Board from "../components/canban/Board";
import Form from "../components/canban/Form";
import TaskProvider from "../contexts/tasks/provider";

const Canban = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col gap-3 p-3">
      <TaskProvider>
        <Form />
        <Board />
      </TaskProvider>
    </div>
  );
};
export default Canban;
