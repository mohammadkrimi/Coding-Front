import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TasksContext } from "../../contexts/tasks/context";
import { nanoid } from "nanoid";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addTask } = useContext(TasksContext);

  const onSubmit = ({ title }) => {
    if (!title) {
      alert("title cannot be empty");
    } else {
      addTask({
        id: nanoid(),
        title,
        state: "TODO",
      });
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow p-3"
    >
      <label htmlFor="title" className="block font-bold text-xl mb-2">
        Create Task
      </label>
      <div className="flex gap-2">
        <input
          id="title"
          {...register("title")}
          className="border border-gray-800 bg-gray-50 text-lg px-2 py-1 rounded-xs grow"
        />
        <button
          type="submit"
          className="border border-gray-800 bg-gray-800 text-white text-lg px-2 py-1 rounded-xs"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
