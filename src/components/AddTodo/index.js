import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

function AddTodo(props) {
  const [newTask, setNewTask] = useState("");

  const { addNewTask, toggleCompleted, showCompleted } = props;

  const handleAddClick = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      alert("The task name should not be empty");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: newTask,
      completed: false
    };
    addNewTask(newTodo);
    setNewTask("");
  };

  const showCompletedToggle = () => {
    toggleCompleted();
  };

  return (
    <form className="add-todo-container" onSubmit={handleAddClick}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="add-todo-input"
      />
      <div className="add-todo-button-container">
        <button type="submit" className="add-todo-button">
          Add
        </button>
        <button
          type="button"
          className="show-all-button"
          onClick={showCompletedToggle}
        >
          {showCompleted ? "Show All" : "Show Completed"}
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
