// TaskForm.js
import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: { id: Date.now(), text } });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
