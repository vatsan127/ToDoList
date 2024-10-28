import React from "react";
import { useState } from "react";
import data from "../config/default.config";

import AccordionBuilder from "./AccordionBuilder";
import AccordionInput from "./AccordionInput";

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

function Accordion() {
  return (
    <div className="">
      <AccordionInput />
      <div className="accordion" id="accordionExample">
        {createAccordion()}
      </div>
    </div>
  );
}

export default Accordion;
