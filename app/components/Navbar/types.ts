import React from "react";

import { IconProps } from "@app/assets/icons/types";

export type Navlink = {
  path: string;
  text: string;
  icon: React.FC<IconProps>;
};
