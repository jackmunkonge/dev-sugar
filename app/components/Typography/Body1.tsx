import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Body1: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-default text-body1 text-[${color}] font-normal tracking-wide005`}>{children}</span>
);

export default Body1;
