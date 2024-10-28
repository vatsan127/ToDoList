import React from "react";
import { useState } from "react";

function AccordionInput() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputChange(event) {
    const newTask = event.target.value;
    setTask(newTask);
  }

  function handleAddTask() {
    setTaskList([...taskList, task]);
    console.log(taskList);
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your task here..."
        onChange={handleInputChange}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}

export default AccordionInput;
