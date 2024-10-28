import React from "react";
import { useState } from "react";
import AccordionBuilder from "./AccordionBuilder";
import data from "../config/default.config";

// const [task, setTask] = useState("");
// const [taskList, setTaskList] = useState([]);

// function handleInputChange(event) {
//   const newTask = event.target.value;
//   setTask(newTask);
//   console.log(newTask);
// }

// function handleAddTask() {}

function createAccordion() {
  return data.map((item) => (
    <AccordionBuilder
      key={item.id}
      title={item.title}
      content={item.content}
      id={item.id}
    />
  ));
}

function toDoInput() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your task here..."
        // onChange={handleInputChange}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        // onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}

function Accordion() {
  return (
    <div className="">
      {toDoInput()}
      <div className="accordion" id="accordionExample">
        {createAccordion()}
      </div>
    </div>
  );
}

export default Accordion;
