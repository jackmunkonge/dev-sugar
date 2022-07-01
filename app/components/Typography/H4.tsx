import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H4: React.FC<TypographyProps> = ({ chlidren, color = theme.colors.body }) => (
  <span className={`not-italic font-sc text-h4 text-[${color}] font-normal tracking-wide0025`}>{chlidren}</span>
);

export default H4;
