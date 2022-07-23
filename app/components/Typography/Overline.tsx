import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Overline: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? "select-auto" : "select-none";
  return (
    <span
      style={{ color: color }}
      className={`not-italic font-mono text-overline font-normal tracking-wide015 uppercase ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Overline;
