import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Body1: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span style={{ color: color }} className={`not-italic font-default text-body1 font-normal tracking-wide005`}>
    {children}
  </span>
);

export default Body1;
