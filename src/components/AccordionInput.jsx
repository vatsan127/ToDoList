import React from "react";
import { useState } from "react";

function AccordionInput(props) {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputChange(event) {
    const newTask = event.target.value;
    setTask(newTask);
  }

  function handleAddTask() {
    console.log("task: '" + task + "'");
    if (!task) {
      console.log("task is empty");
      return;
    }
    const updatedTaskList = taskList.length > 0 ? [...taskList, task] : [task];
    setTaskList(updatedTaskList);
    props.onClick(updatedTaskList);
    console.log("Updated taskList: '" + updatedTaskList + "'");
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your task here..."
        onChange={handleInputChange}
        value={task}
        required
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
