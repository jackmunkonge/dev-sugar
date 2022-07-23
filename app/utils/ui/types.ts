import { ButtonActionType } from "@app/components/Buttons/types";

export type ButtonActionWrapperProps = {
  children: React.ReactNode;
  isNavbarLink: boolean;
  externalLink: string;
  isLink: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  searchParams?: URLSearchParams;
  pathName: string;
  buttonType: ButtonActionType;
  ariaControlId: string;
  ariaExpanded: boolean;
};
