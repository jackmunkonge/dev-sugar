import React, { MouseEventHandler } from "react";

import { IconProps } from "@app/assets/icons/types";
import { ComponentIconPosition, ComponentSize } from "@app/utils/globalTypes";

// Props
export type ButtonProps = {
  text: string;
  size?: ComponentSize;
  icon?: React.FC<IconProps>;
  iconPosition?: ComponentIconPosition;
  externalLink?: string;
  isFullWidth?: boolean;
  isLink?: boolean;
  isNavbarLink?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  searchParams?: URLSearchParams;
  pathName?: string;
  buttonType?: ButtonActionType;
  ariaControlId?: string;
  ariaExpanded?: boolean;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonTextProps = {
  children: React.ReactNode;
  color: string;
};

// Types
export type ButtonActionType = "submit" | "button";
