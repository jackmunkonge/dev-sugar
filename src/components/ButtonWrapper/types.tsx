import { ButtonActionType } from '@components/Buttons/types';

export type ButtonActionWrapperProps = {
  className?: string;
  children: React.ReactNode;
  isDisabled: boolean;
  isLoading: boolean;
  isFullWidth?: boolean;
  isNavbarLink?: boolean;
  externalLink?: string;
  isLink?: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  searchParams?: URLSearchParams;
  pathName?: string;
  buttonType?: ButtonActionType;
  ariaControlId?: string;
  ariaExpanded?: boolean;
  [restProps: string]: any;
};
