import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); 

  const addTask = (text) => {
    if (text.trim() === "") return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id) => {
    const newText = prompt("Edit your task:");
    if (newText) {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, text: newText } : task
      ));
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  const getFilteredTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter(task => task.completed);
      case "pending":
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="input-group">
        <input id="taskInput" type="text" className="todo-input" placeholder="Add a task..." />
        <button className="add-btn" onClick={() => {
          addTask(document.getElementById("taskInput").value);
          document.getElementById("taskInput").value = ""; 
        }}>
          Add
        </button>
      </div>

      <div className="filter-group">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Completed</button>
        <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ToDoList tasks={getFilteredTasks()} toggleComplete={toggleComplete} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
