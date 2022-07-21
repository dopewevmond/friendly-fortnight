import { useEffect, useState } from "react";
import Task from "./Task";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [pendingTodo, setPendingTodo] = useState("");

  useEffect(() => {
    addTodo(createTodo("task 1"));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  function createTodo(task) {
    return {
      uid: makeid(5),
      task,
      done: false,
    };
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
    console.log(todos);
  }

  function deleteTodo(todoItemUid) {
    setTodos([...todos.filter((todoItem) => todoItem.uid !== todoItemUid)]);
  }

  function toggleTodo(todoItemUid) {
    const newTodos = todos.map((todoItem) => ({ ...todoItem }));
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].uid === todoItemUid) {
        newTodos[i].done = !newTodos[i].done;
      }
    }
    setTodos(newTodos);
  }

  function editTask(todoItemUid, newTask) {
    const newTodos = todos.map((todoItem) => ({ ...todoItem }));
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].uid === todoItemUid) {
        newTodos[i].task = newTask;
      }
    }
    setTodos(newTodos);
  }

  return (
    <div className="my-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(createTodo(pendingTodo));
          setPendingTodo("");
        }}
      >
        <div className="flex flex-row">
          <div className="basis-3/4">
            <label className="w-full">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add a todo..."
                value={pendingTodo}
                onChange={(e) => {
                  setPendingTodo(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-1/6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add todo
            </button>
          </div>
        </div>
      </form>
      {todos.length ? (
        todos.map((todo) => (
          <Task
            key={todo.uid}
            uid={todo.uid}
            task={todo.task}
            done={todo.done}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTask={editTask}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
