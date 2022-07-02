import React from "react";

import { IconProps } from "@app/assets/icons/types";
import { ComponentSize } from "@app/utils/globalTypes";

// Props
export type ButtonProps = {
  text: string;
  size?: ComponentSize;
  icon?: React.FC<IconProps>;
  iconPosition?: ButtonIconPosition;
  isLink?: boolean;
  isNavbarLink?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  searchParams?: URLSearchParams;
  pathName?: string;
  buttonType?: ButtonActionType;
  ariaControlId?: string;
  ariaExpanded?: boolean;
};

export type TextProps = {
  children: React.ReactNode;
  color: string;
};

export type ButtonActionWrapperProps = {
  children: React.ReactNode;
};

// Types
export type ButtonActionType = "submit" | "button";

export enum ButtonIconPosition {
  LEFT = "left",
  RIGHT = "right",
}
