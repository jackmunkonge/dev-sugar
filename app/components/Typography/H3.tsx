import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H3: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? "select-auto" : "select-none";
  return (
    <span style={{ color: color }} className={`not-italic font-sc text-h3 font-normal tracking-normal ${isSelectable}`}>
      {children}
    </span>
  );
};

export default H3;
