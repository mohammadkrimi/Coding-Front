import { useState } from "react";
import { TasksContext } from "./context";

const TaskProvider = ({ children }) => {
  const columns = [
    {
      state: "TODO",
      title: "to-do",
    },
    {
      state: "DOING",
      title: "doing...",
    },
    {
      state: "DONE",
      title: "done!",
    },
  ];
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskState = ({ id, newState }) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          state: newState,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <TasksContext value={{ columns, tasks, addTask, updateTaskState }}>
      {children}
    </TasksContext>
  );
};
export default TaskProvider;
