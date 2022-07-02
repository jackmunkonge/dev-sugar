import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Caption: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span style={{ color: color }} className={`not-italic font-default text-caption font-normal tracking-wide004`}>
    {children}
  </span>
);

export default Caption;
