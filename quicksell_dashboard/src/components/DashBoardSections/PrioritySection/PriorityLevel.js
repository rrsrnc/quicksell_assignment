import React from "react";

import { FiBarChart } from "react-icons/fi";
import { FcHighPriority } from "react-icons/fc";
import { BiDotsHorizontal } from "react-icons/bi";
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
} from "react-icons/md";

const PriorityLevel = ({ priority }) => {
  // Assuming priority is a number from 0 to 2
  const priorityIcons = [
    <BiDotsHorizontal />,
    <MdSignalCellularAlt1Bar />,
    <MdSignalCellularAlt2Bar />,
    <FiBarChart />,
    <FcHighPriority />,
  ];

  return <div>{priorityIcons[priority]}</div>;
};

export default PriorityLevel;
