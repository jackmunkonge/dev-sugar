import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Caption: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-default text-caption text-[${color}] font-normal tracking-wide004`}>
    {children}
  </span>
);

export default Caption;
