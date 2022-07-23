import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Button2: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? "select-auto" : "select-none";
  return (
    <span
      style={{ color: color }}
      className={`not-italic font-sc text-button2 font-bold tracking-wide025 ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Button2;
