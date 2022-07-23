import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H4: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? "select-auto" : "select-none";
  return (
    <span
      style={{ color: color }}
      className={`not-italic font-sc text-h4 font-normal tracking-wide0025 ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default H4;
