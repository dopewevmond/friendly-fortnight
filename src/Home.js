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
    addTodo({
      uid: makeid(5),
      task: "this is a dummy task that you see in the beginning",
    });
  }, []);

  function createTodo(task) {
    return {
      uid: makeid(5),
      task,
    };
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(todoItemUid) {
    setTodos([...todos.filter((todoItem) => todoItem.uid !== todoItemUid)]);
  }

  function editTodo(todoItemUid, newTask) {
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
            done={false}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
