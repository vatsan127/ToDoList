import React from "react";
import { useState } from "react";

import AccordionBuilder from "./AccordionBuilder";
import AccordionInput from "./AccordionInput";

function Accordion() {
  const [accordionData, setAccordionData] = useState([]);

  function getData(data) {
    setAccordionData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        title: `Task ${prevData.length + 1}`,
        content: data[data.length - 1],
      },
    ]);
  }

  function createAccordion() {
    return accordionData.map((item) => (
      <AccordionBuilder
        key={item.id}
        title={item.title}
        content={item.content}
        id={item.id}
      />
    ));
  }

  return (
    <div className="">
      <AccordionInput onClick={getData} />
      <div className="accordion" id="accordionExample">
        {createAccordion()}
      </div>
    </div>
  );
}

export default Accordion;
