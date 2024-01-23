// Task.js
import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const Task = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const handleRemove = () => {
    dispatch({ type: "REMOVE_TASK", payload: task.id });
  };

  return (
    <div className="task">
      <p>{task.text}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Task;
