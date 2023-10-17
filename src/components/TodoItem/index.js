import React, { useState } from "react";
import "./index.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";

function TodoItem({ todo, onDelete, onMarkCompleted, onSaveEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    if (editedTitle.trim() === "") {
      alert("The task name should not be empty");
      return;
    }
    onSaveEdit(todo.id, editedTitle);
    setIsEditing(false);
  };

  const todoLabel = todo.completed ? "todo-label checked" : "todo-label";
  const compltedTask = todo.completed
    ? "label-container  completed"
    : "label-container";

  const completedStatus = todo.completed
    ? "completed-status complete"
    : "completed-status";

  return (
    <li className="todo-item">
      <p className={completedStatus}>
        {todo.completed ? "Completed" : "Pending"}
      </p>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onMarkCompleted(todo.id)}
        id={"checkBox" + todo.id}
      />
      <div className={compltedTask}>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            className="editable-text"
          />
        ) : (
          <label htmlFor={"checkBox" + todo.id} className={todoLabel}>
            {todo.title}
          </label>
        )}
        <div className="todo-item-button-container">
          {isEditing ? null : (
            <button onClick={handleEditClick}>
              <BiSolidEditAlt className="edit-icon" />
            </button>
          )}
          <button onClick={() => onDelete(todo.id)}>
            <RiDeleteBin6Line className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
