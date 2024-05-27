import React, { MouseEventHandler } from 'react';

import { IconProps } from '@assets/icons/types';
import { TypographyProps } from '@components/Typography/types';
import { ComponentSize } from '@utils/globalTypes';

// Props
export type ButtonProps = {
  contentClassName?: string;
  textClassName?: string;
  text: string;
  size?: ComponentSize;
  leadIcon?: React.FC<IconProps>;
  trailIcon?: React.FC<IconProps>;
  externalLink?: string;
  isFullWidth?: boolean;
  isLink?: boolean;
  isNavbarLink?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isIconFilled?: boolean;
  searchParams?: URLSearchParams;
  pathName?: string;
  buttonType?: ButtonActionType;
  ariaControlId?: string;
  ariaExpanded?: boolean;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  customTypography?: React.FC<TypographyProps>;
};

export type ButtonTextProps = {
  children: React.ReactNode;
  className?: string;
};

export type IconButtonProps = {
  size?: number;
  icon?: React.FC<IconProps>;
  solid?: boolean;
  color?: string;
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

// Types
export type ButtonActionType = 'submit' | 'button';
