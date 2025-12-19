import { useContext, useMemo } from "react";
import { cn } from "../../../utils/className";
import Task from "./Task";
import { TasksContext } from "../../../contexts/tasks/context";

const Column = ({ title, state, className }) => {
  const { tasks: allTasks } = useContext(TasksContext);

  const tasks = useMemo(
    () => allTasks.filter((task) => task.state === state),
    [allTasks, state]
  );

  const titleColor = useMemo(() => {
    switch (state) {
      case "TODO":
        return "bg-yellow-200";
      case "DOING":
        return "bg-green-200";
      case "DONE":
        return "bg-blue-200";
      default:
        return "";
    }
  }, [state]);

  return (
    <div
      className={cn([
        className,
        "overflow-hidden rounded-xl border border-gray-800 shadow",
      ])}
    >
      <div>
        <h2
          className={cn([
            titleColor,
            "text-center p-2 font-bold text-lg border-b border-gray-800",
          ])}
        >
          {title}
        </h2>
      </div>
      <ul className="flex flex-col gap-2 p-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task {...task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
