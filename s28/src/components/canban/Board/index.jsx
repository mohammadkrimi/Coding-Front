import Column from "./Column";
import { useContext } from "react";
import { TasksContext } from "../../../contexts/tasks/context";
const Board = () => {
  const { columns } = useContext(TasksContext);

  return (
    <div className="bg-white rounded-lg shadow p-3 grow">
      <div className="flex flex-col h-full">
        <h1 className="text-center block font-bold text-xl mb-2">
          Canban Board
        </h1>
        <div className="grow flex gap-3">
          {columns.map((col) => (
            <Column
              key={col.state}
              state={col.state}
              title={col.title}
              className="w-1/3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
