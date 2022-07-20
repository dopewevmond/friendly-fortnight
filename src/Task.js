import "./Task.css";

const Task = ({ uid, task, done, deleteTodo }) => {
  return (
    <div className="task-container m-top">
      <input type="checkbox" id={uid} />
      <label htmlFor={uid} checked={done}>
        {task}
      </label>

      <button className="del-button" onClick={() => deleteTodo(uid)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
