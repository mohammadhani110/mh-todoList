import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const getValue = (e) => {
    const value = e.target.value;
    setTodo(value);
  };

  const addTodo = () => {
    if (todo && todo.length > 3) {
      let data = [...todos];
      data.push(todo);
      setTodos(data);
      clearInput();
    }
  };
  const deleteTodo = (index) => (e) => {
    let updateTodo = [...todos];
    updateTodo.splice(index, 1);
    setTodos(updateTodo);
  };

  const updateTodo = (index) => (e) => {
    let text = e.target.value;
    let updateTodo = [...todos];
    updateTodo[index] = text;
    setTodos(updateTodo);
  };

  const clearInput = () => {
    setTodo("");
  };

  return (
    <div className="main">
      <div className="center">
        <h1>Todo App</h1>
        <input type="text" onChange={getValue} value={todo} />
        <button onClick={addTodo}>+</button>
        <br />
        <ol>
          {todos.map((text, index) => (
            <li key={index}>
              <input value={text} onChange={updateTodo(index)} />
              <button onClick={deleteTodo(index)} name="deleteBtn">
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
