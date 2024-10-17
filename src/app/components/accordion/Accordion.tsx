"use client";
import React, { useState } from "react";
import "./_accordion.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  heading: string;
  content: string;
}
const Accordion: React.FC<IProps> = ({ heading, content }) => {
  // The CURRENTTARGET property always refers to the element whose event listener triggered the event,
  //  opposed to the TARGET  property, which returns the element that triggered the event.
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle("open");
    setOpenAccordion(!openAccordion);
  };

  return (
    <button
      className="accordion_btn"
      onClick={toggleAccordion}
      aria-label="Courses content"
      aria-expanded={openAccordion ? "true" : "false"}
    >
      <div className="heading">
        <h4 className="accordion_heading">{heading}</h4>
        <FontAwesomeIcon
          icon={faAngleDown}
          aria-label="Show More"
          className="arrow"
        />
      </div>
      <p className="cv_content">{content}</p>
    </button>
  );
};
export default Accordion;
