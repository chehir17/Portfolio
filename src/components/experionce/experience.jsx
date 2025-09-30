import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Capsule from "../../hooks/capsule";

// Sous-composant pour le contenu
function AccordionContent({ isOpen, children }) {
  return (
    <div
      className="grid transition-[grid-template-rows] mt-2 shadow-md rounded-lg bg-[#fff] duration-300"
      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div className="px-8 py-5">{children}</div>
      </div>
    </div>
  );
}

export function Experience({ title, date, location, establishment, description, capsule }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex relative">
      <div className="flex flex-col items-center mr-4">
        <div className="w-4 h-4 bg-blue-500 rounded-lg border-2 border-white shadow-md"></div>
        <div className="flex-1 w-[2px] bg-gray-300"></div>
      </div>
      <div className="flex-1 mb-6">
        <div className="shadow-md bg-white hover:shadow-xl rounded-xl overflow-hidden py-1">
          <div
            className="flex justify-between px-4 py-4 cursor-pointer items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex justify-between w-full">
              <h3 className="font-bold text-gray-600 text-base sm:text-lg xs:text-sm">{title}</h3>
              <h3 className="font-semibold text-xs sm:text-sm md:text-base text-gray-400">{date}</h3>
            </div>
            <FontAwesomeIcon
              icon={isOpen ? faMinus : faPlus}
              className={`w-6 h-6 ml-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        <div className="shadow-lg rounded-xl overflow-hidden mt-2">
          <AccordionContent isOpen={isOpen}>
            <div className="flex text-start items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-4 h-4 text-blue-400"
              />
              <p className="ml-2 text-md sm:text-md">{location} - <span className="text-gray-500">{establishment}</span></p>
            </div>

            <ul className="mt-3 text-xs sm:text-sm md:text-base text-[#697482] list-disc list-inside">
              {Array.isArray(description) ? (
                description.map((item, index) => (
                  <li key={index} className="mt-1 mb-2">{item}</li>
                ))
              ) : (
                <li>{description}</li>
              )}
            </ul>

            <div className="flex flex-wrap gap-2 mt-2">
              {Array.isArray(capsule)
                ? capsule.map((label, index) => <Capsule label={label} key={index} />)
                : null}
            </div>
          </AccordionContent>
        </div>

      </div>
    </div>
  );
}
