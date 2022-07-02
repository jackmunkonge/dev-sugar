import * as React from "react";
import { theme } from "tailwind.config";

import { IconProps } from "../types";

const Lightbulb: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  isSelected = false,
  outlineColor = theme.colors.primary.DEFAULT,
  fillColor = theme.colors.primary.DEFAULT,
  selectedOutlineColor = theme.colors.primary.light3,
  selectedFillColor = theme.colors.primary.light3,
}) => (
  <svg className="block" width={width} height={height} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M8.5 19V14H7.5V12H6.5V8H7.5V6H9.5V5H13.5L13.498 5.88611L15.5 6V8H16.5V12H15.5V14H14.5V19H8.5Z"
      fill={isSelected ? selectedFillColor : fillColor}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 4H10.0004V5H8V6H7V8H6V12H7V14H8V18.9952H9V19.9952L14 20V19H15V14H16V12H17V8H16V6H15V5H13V4ZM13 5V6H15V8H16V12H15V14H14L14.0004 15L12.0007 14.9959V9H13V7.99524L10 8V9H11V14.9959L9 15V14H8V12H7V8H8V6H10.0004V5H13ZM14 19L9 18.9952V17.9952H14.0004L14 19ZM9 16.9952V16H14L14.0004 16.9952H9Z"
      fill={isSelected ? selectedOutlineColor : outlineColor}
    />
  </svg>
);

export default Lightbulb;
