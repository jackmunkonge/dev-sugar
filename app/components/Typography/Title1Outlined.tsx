import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Title1Outlined: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? "select-auto" : "select-none";
  return (
    <span
      style={{ color: color }}
      className={`not-italic font-outline text-h1 font-medium tracking-tight015 ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Title1Outlined;
