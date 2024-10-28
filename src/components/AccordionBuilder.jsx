import React from "react";

function AccordionBuilder(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${props.id}`}
          aria-expanded="false"
          aria-controls={props.id}
        >
          {props.title}
        </button>
      </h2>
      <div
        id={props.id}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{props.content}</div>
      </div>
    </div>
  );
}

export default AccordionBuilder;
