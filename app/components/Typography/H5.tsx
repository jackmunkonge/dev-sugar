import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H5: React.FC<TypographyProps> = ({ children, color = theme.colors.body }) => (
  <span className={`not-italic font-sc text-h5 text-[${color}] font-normal tracking-normal`}>{children}</span>
);

export default H5;