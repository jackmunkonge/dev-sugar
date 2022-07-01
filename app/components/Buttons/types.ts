import React from "react";

import { IconProps } from "@app/assets/icons/types";
import { ComponentSize, ComponentState } from "@app/utils/globalTypes";

export type ButtonProps = {
  text: string;
  size?: ComponentSize;
  icon?: React.FC<IconProps>;
  iconPosition?: ButtonIconPosition;
  state?: ComponentState;
  isLink?: boolean;
  searchParams?: URLSearchParams;
  pathName?: string;
  buttonType?: ButtonActionType;
  ariaControlId?: string;
  ariaExpanded?: boolean;
};

export type ButtonActionType = "submit" | "button";

export enum ButtonIconPosition {
  LEFT = "left",
  RIGHT = "right",
}
