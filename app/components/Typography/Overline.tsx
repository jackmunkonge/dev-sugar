import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const Overline: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-mono text-overline text-[${color}] font-normal tracking-wide015 uppercase`}>
    {children}
  </span>
);

export default Overline;
