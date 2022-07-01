import React from "react";
import { theme } from "tailwind.config";

import { TypographyProps } from "./types";

const H2: React.FC<TypographyProps> = ({ chlidren, color = theme.colors.body }) => (
  <span className={`not-italic font-sc text-h2 text-[${color}] font-normal tracking-tight005`}>{chlidren}</span>
);

export default H2;
