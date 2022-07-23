import { IconProps } from "@app/assets/icons/types";

import { ButtonActionType } from "../types";

export type IconButtonProps = {
  size?: number;
  icon?: React.FC<IconProps>;
  externalLink?: string;
  isLink?: boolean;
  isNavbarLink?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  searchParams?: URLSearchParams;
  pathName?: string;
  buttonType?: ButtonActionType;
  ariaControlId?: string;
  ariaExpanded?: boolean;
  srOnlyText?: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
