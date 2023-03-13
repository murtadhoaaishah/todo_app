import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";

function App() {
  // const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("");

  // const [checked, setChecked] = useState(false)

  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: true },
    { id: 3, text: "Todo 3", completed: false },
  ]);

  const handleNewTodo = (e) => {
    const newId = Math.floor(Math.random() * 10000);
    if (!newTodo.trim()) return;
    todos.map((todo) =>
      setTodos([...todos, { text: newTodo, completed: false, id: newId }])
    );
    setNewTodo("");
  };

  const handleTodoCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      // todo.id === id && { ...todo, complted: !todo.completed }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="input-rapper">
        <input
          placeholder="Add your new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleNewTodo}>
          <img src="/vectors/add.svg" />
        </button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-rapper">
          <span
            style={todo.completed ? { textDecoration: "line-through" } : null}
          >
            {todo.text}
          </span>
          <input
            className="todo-input"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleTodoCompleted(todo.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
