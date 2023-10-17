import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addNewTask = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const deleteTask = (taskId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(updatedTodos);
  };

  const markCompleted = (taskId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const saveEdit = (taskId, editedTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === taskId ? { ...todo, title: editedTitle } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App-container">
      <div className="todoList-container">
        <h1 className="todo-heading">Todo App</h1>
        <AddTodo
          addNewTask={addNewTask}
          showCompleted={showCompleted}
          toggleCompleted={toggleCompleted}
        />

        <h1 className="my-tasks"> My Tasks</h1>
        <TodoList
          todos={todos}
          showCompleted={showCompleted}
          onDelete={deleteTask}
          onMarkCompleted={markCompleted}
          onSaveEdit={saveEdit}
        />
      </div>
    </div>
  );
}

export default App;
