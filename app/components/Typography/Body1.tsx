import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Body1: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? "select-auto" : "select-none";
  return (
    <span
      style={{ color: color }}
      className={`not-italic font-default text-body1 font-normal tracking-wide005 ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Body1;
