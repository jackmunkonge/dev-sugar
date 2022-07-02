import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H2: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span style={{ color: color }} className={`not-italic font-sc text-h2 font-normal tracking-tight005`}>
    {children}
  </span>
);

export default H2;
