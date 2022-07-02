import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H6: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span style={{ color: color }} className={`not-italic font-sc text-h6 font-bold tracking-wide0015`}>
    {children}
  </span>
);

export default H6;
