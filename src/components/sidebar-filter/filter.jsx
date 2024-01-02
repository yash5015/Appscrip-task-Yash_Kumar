import React from "react";
import "./style.css";
import { filters } from "../../constants/filters";
const Filter = () => {
  return (
    <div className="filtercontainer">
      <div className="borderBox padV20 customizable">
        <input
          type="checkbox"
          name=""
          id="custom"
        />
        <label  htmlFor="custom">customizable</label>
      </div>
      <div className="filterTypesContainer">
        {filters.map((item) => (
          <div className="borderBox dropdown padV20">
            <div className="heading">
              <p>{item.type}</p>
              <img src="/icons/arrow-down.svg" alt="" />
            </div>
            <div className="selectedOption">
              <p>All</p>
              <div className="showDropDown">
                <p>Unselect all</p>
                <div className="optionsContainer">
                  {item?.options?.map((option) => (
                    <div className="type-optionCont">
                      <input type="checkbox" name="" id="type-option" />
                      <label htmlFor="type-option">{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
