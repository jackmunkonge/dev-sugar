import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Subtitle1: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-default text-subtitle1 text-[${color}] font-normal tracking-wide0015`}>
    {children}
  </span>
);

export default Subtitle1;