import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.length === 0 ? (
        <p className="empty-msg">No tasks available</p>
      ) : (
        tasks.map(task => (
          <ToDoItem key={task.id} task={task} toggleComplete={toggleComplete} editTask={editTask} deleteTask={deleteTask} />
        ))
      )}
    </ul>
  );
};

export default ToDoList;
