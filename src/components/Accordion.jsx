import React from "react";
import data from "../config/default.config";

function buildAccordion(props) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={props.collapse}
          aria-expanded="false"
          aria-controls={props.id}
        >
          {props.title}
        </button>
      </h2>
      <div
        id={props.id}
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">{props.content}</div>
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion" id="accordionExample">
      {data.map(buildAccordion)}
    </div>
  );
}

export default Accordion;
