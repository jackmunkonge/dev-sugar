import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H1Filled: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-filled text-h1 text-[${color}] font-medium tracking-tight015`}>{children}</span>
);

export default H1Filled;
