import * as React from "react";
import { theme } from "tailwind.config";

import { IconProps } from "./types";

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
      d="M18 5H6v1H5v2h1v1h12V8h1V6h-1V5Zm0 1v2H6V6h12ZM18 10H6v1H5v2h1v1h12v-1h1v-2h-1v-1Zm0 1v2H6v-2h12Z"
      fill={isSelected ? selectedOutlineColor : outlineColor}
    />
    <path
      d="M6 15h12v1H6v-1ZM6 18H5v-2h1v2ZM18 18h1v-2h-1v2ZM18 18H6v1h12v-1Z"
      fill={isSelected ? selectedOutlineColor : outlineColor}
    />
    <path d="M6 6h12v2H6V6ZM6 11h12v2H6v-2ZM18 16H6v2h12v-2Z" fill={isSelected ? selectedFillColor : fillColor} />
  </svg>
);

export default Hamburger;
