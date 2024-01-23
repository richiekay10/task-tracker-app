// App.js
import React from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Tracker</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
