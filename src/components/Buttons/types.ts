import React, { MouseEventHandler } from 'react';

import { IconProps } from '@assets/icons/types';
import { ComponentSize } from '@utils/globalTypes';

// Props
export type ButtonProps = {
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
export type ButtonActionType = 'submit' | 'button';
