import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Button2: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-sc text-button2 text-[${color}] font-bold tracking-wide025`}>{children}</span>
);

export default Button2;
