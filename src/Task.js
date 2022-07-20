import "./Task.css";

const Task = ({ uid, task, done, deleteTodo, toggleTodo }) => {
  return (
    <div className="task-container m-top">
      <input
        type="checkbox"
        id={uid}
        checked={done}
        onChange={() => toggleTodo(uid)}
      />
      <label htmlFor={uid}>{task}</label>
      <button className="del-button" onClick={() => deleteTodo(uid)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
