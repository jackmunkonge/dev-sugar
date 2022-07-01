import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Body2: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-default text-body2 text-[${color}] font-normal tracking-wide0025`}>{children}</span>
);

export default Body2;
