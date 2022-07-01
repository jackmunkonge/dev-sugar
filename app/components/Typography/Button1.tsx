import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Button1: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-sc text-button1 text-[${color}] font-bold tracking-wide05`}>{children}</span>
);

export default Button1;
