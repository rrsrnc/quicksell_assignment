import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BsSliders2 } from "react-icons/bs";
import DashBoard from "./DashboardLayout/DashBoard";

const Header = (props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValueGroup, setSelectedValueGroup] = useState(
    localStorage.getItem("selectedGroupingOption") || "status"
  );
  const [selectedValueOrder, setSelectedValueOrder] = useState(
    localStorage.getItem("selectedOrderingOption") || "priority"
  );

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Handle the select change event for Grouping
  const handleSelectChangeGroup = (event) => {
    setSelectedValueGroup(event.target.value); 
    localStorage.setItem("selectedGroupingOption", event.target.value);
    setDropdownVisible(false); 
  };

  // Handle the select change event for Ordering
  const handleSelectChangeOrder = (event) => {
    setSelectedValueOrder(event.target.value); 
    localStorage.setItem("selectedOrderingOption", event.target.value);
    setDropdownVisible(false);
  };

  return (
    <div>
      <header className="header">
        <button id="display_btn" onClick={toggleDropdown}>
          <BsSliders2 /> Display <FontAwesomeIcon icon={faChevronDown} />
        </button>

        <div
          className={`dropdown-content ${isDropdownVisible ? "show" : "hide"}`}
        >
          <div className="drop_options">
            <label className="label">Grouping</label>
            <select
              className="options"
              value={selectedValueGroup}
              onChange={handleSelectChangeGroup}
            >
              <option value="status" key="status">
                Status
              </option>
              <option value="user" key="user">
                User
              </option>
              <option value="priority" key="priority1">
                Priority
              </option>
            </select>
          </div>
          <div className="drop_options">
            <label className="label">Ordering</label>
            <select
              className="options"
              value={selectedValueOrder}
              onChange={handleSelectChangeOrder}
            >
              <option value="priority" key="priority2">
                Priority
              </option>
              <option value="title" key="title">
                Title
              </option>
            </select>
          </div>
        </div>
      </header>
      <DashBoard
        data={props.data}
        groupingOption={selectedValueGroup}
        sortingOption={selectedValueOrder}
      ></DashBoard>
    </div>
  );
};

export default Header;
