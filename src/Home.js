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
    addTodo(createTodo("this is a dummy task that you see in the beginning"));
  }, []);

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
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(createTodo(pendingTodo));
          setPendingTodo("");
        }}
      >
        <label>
          <input
            placeholder="Add a todo"
            value={pendingTodo}
            onChange={(e) => {
              setPendingTodo(e.target.value);
            }}
          />
        </label>
        <button type="submit">Add todo</button>
      </form>
      <h3>{pendingTodo}</h3>
      {todos.length ? (
        todos.map((todo) => (
          <Task
            key={todo.uid}
            uid={todo.uid}
            task={todo.task}
            done={todo.done}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
