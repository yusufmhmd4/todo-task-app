import React from "react";
import TodoItem from "../TodoItem";
import "./index.css";

function TodoList(props) {
  const { todos, showCompleted, onDelete, onMarkCompleted, onSaveEdit } = props;
  console.log(todos);
  const filteredTodos =
    showCompleted === false ? todos : todos.filter((todo) => todo.completed);

  return (
    <ul className="todo-list-container">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onMarkCompleted={onMarkCompleted}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
