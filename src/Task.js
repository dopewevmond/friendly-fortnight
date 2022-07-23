import { useRef, useState } from "react";
import "./Task.css";

const Task = ({ uid, task, done, deleteTodo, toggleTodo, editTask }) => {
  const [beingEdited, setEdited] = useState(false);
  const valTask = useRef(null);
  const valNewTask = useRef(null);

  const copyTaskToEdit = () => {
    setEdited(true);
    valNewTask.current.value = valTask.current.innerHTML;
    valNewTask.current.focus();
  };
  const updateTaskRef = () => {
    setEdited(false);
    valTask.current.innerHTML = valNewTask.current.value;
    editTask(uid, valTask.current.innerHTML);
  };

  return (
    <>
      <div className="w-full overflow-hidden rounded-lg bg-gray-100 shadow-md duration-300 hover:shadow-xl mb-8">
        <p className="my-4 ml-4 text-gray-500">
          <div className="inline-flex items-center">
            <input
              className="w-8 h-8"
              type="checkbox"
              id={uid}
              checked={done}
              onChange={() => toggleTodo(uid)}
            />
            <label htmlFor={uid} ref={valTask} className="ml-4 w-full">
              {task}
            </label>
          </div>
        </p>

        <div className="space-x-4 bg-gray-100 py-4 text-center">
          <button
            className={
              beingEdited
                ? "dont-show"
                : "inline-block rounded-md bg-blue-500 px-10 py-2 font-semibold text-blue-100 shadow-md duration-75 hover:bg-blue-400"
            }
            onClick={copyTaskToEdit}
          >
            Edit
          </button>

          <button
            className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400"
            onClick={() => deleteTodo(uid)}
          >
            Delete
          </button>
        </div>

        <div
          className={
            beingEdited ? "space-x-4 bg-gray-200 py-4 text-center" : "dont-show"
          }
        >
          <div>
            <label>
              Change to: &nbsp;
              <input
                type="text"
                ref={valNewTask}
                className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              />
            </label>
          </div>
          <button
            className="inline-block rounded-md bg-gray-500 px-10 py-2 font-semibold text-gray-100 shadow-md duration-75 hover:bg-gray-400"
            onClick={() => setEdited(false)}
          >
            Cancel
          </button>
          <button
            className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
            onClick={updateTaskRef}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
