import React from "react";

const ToDoItem = ({ task, toggleComplete, editTask, deleteTask }) => {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(task.id)} className="task-text">
        {task.text}
      </span>
      <button className="edit-btn" onClick={() => editTask(task.id)}>✏️</button>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
};

export default ToDoItem;
