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
    <div className="task-container m-top task">
      <input
        type="checkbox"
        id={uid}
        checked={done}
        onChange={() => toggleTodo(uid)}
      />
      <label htmlFor={uid} ref={valTask}>
        {task}
      </label>
      <button className="del-button" onClick={() => deleteTodo(uid)}>
        Delete
      </button>

      <div className={beingEdited ? "" : "dont-show"}>
        <label>
          Change to:
          <input type="text" ref={valNewTask} />
        </label>
        <button className="confirm-edit-button" onClick={updateTaskRef}>
          Update
        </button>
        <button className="cancel-button" onClick={() => setEdited(false)}>
          Cancel
        </button>
      </div>

      <button
        className={beingEdited ? "dont-show" : "edit-button"}
        onClick={copyTaskToEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default Task;
