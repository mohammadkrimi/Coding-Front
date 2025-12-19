import { useContext, useMemo } from "react";
import { cn } from "../../../utils/className";
import { TasksContext } from "../../../contexts/tasks/context";

const Task = ({ title, state, id }) => {
  const { updateTaskState, columns } = useContext(TasksContext);

  const currentColIndex = useMemo(
    () => columns.findIndex((col) => col.state === state),
    [state, columns]
  );

  const moveToNextState = () => {
    updateTaskState({
      id,
      newState: columns[currentColIndex + 1].state,
    });
  };

  const moveToPrevState = () => {
    updateTaskState({
      id,
      newState: columns[currentColIndex - 1].state,
    });
  };

  return (
    <div className="bg-gray-200 p-1 rounded-sm flex items-center">
      <button
        className={cn([
          "opacity-40 p-1 cursor-pointer",
          !currentColIndex && "invisible",
        ])}
        disabled={!currentColIndex}
        onClick={moveToPrevState}
      >
        ❮
      </button>
      <p className="text-sm grow">
        {title} | {currentColIndex}
      </p>
      <button
        className={cn([
          "opacity-40 p-1 cursor-pointer",
          currentColIndex === columns.length - 1 && "invisible",
        ])}
        disabled={currentColIndex === columns.length - 1}
        onClick={moveToNextState}
      >
        ❯
      </button>
    </div>
  );
};
export default Task;
