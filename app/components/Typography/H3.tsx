import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H3: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span style={{ color: color }} className={`not-italic font-sc text-h3 font-normal tracking-normal`}>
    {children}
  </span>
);

export default H3;
