import * as React from "react";
import { theme } from "tailwind.config";

import { IconProps } from "../types";

const Hamburger: React.FC<IconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 5H6V6H5V8H6V9H18V8H19V6H18V5ZM18 6V8H6V6H18Z"
      fill={isSelected ? selectedOutlineColor : outlineColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10H6V11H5V13H6V14H18V13H19V11H18V10ZM18 11V13H6V11H18Z"
      fill={isSelected ? selectedOutlineColor : outlineColor}
    />
    <path d="M6 15H18V16H6V15Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M6 18H5V16H6V18Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M18 18H19V16H18V18Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M18 18H6V19H18V18Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M6 6H18V8H6V6Z" fill={isSelected ? selectedFillColor : fillColor} />
    <path d="M6 11H18V13H6V11Z" fill={isSelected ? selectedFillColor : fillColor} />
    <path d="M18 16H6V18H18V16Z" fill={isSelected ? selectedFillColor : fillColor} />
  </svg>
);

export default Hamburger;
