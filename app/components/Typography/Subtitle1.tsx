import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Subtitle1: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? "select-auto" : "select-none";
  return (
    <span
      style={{ color: color }}
      className={`not-italic font-default text-subtitle1 font-normal tracking-wide0015 ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Subtitle1;
