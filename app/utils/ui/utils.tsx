import { Link, NavLink } from "@remix-run/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ButtonActionWrapperProps } from "./types";

export const ButtonWrapper: React.FC<ButtonActionWrapperProps> = ({
  classNames = '',
  children,
  isDisabled,
  isFullWidth,
  isNavbarLink,
  isLink,
  externalLink,
  pathName,
  searchParams = "",
  buttonType,
  ariaControlId,
  ariaExpanded,
  clickHandler = () => {},
}) => {
  const styles = twMerge(clsx(
    'group',
    isFullWidth ? 'w-full' : 'w-fit',
    isDisabled && 'opacity-50 pointer-events-none',
  ), classNames);

  if (externalLink) {
    return (
      <a href={externalLink} target="_blank">
        {children}
      </a>
    );
  }

  if (isNavbarLink) {
    return (
      <NavLink className={styles} to={{ pathname: pathName, search: searchParams.toString() }}>
        {children}
      </NavLink>
    );
  }
  if (isLink) {
    return (
      <Link className={styles} to={{ pathname: pathName, search: searchParams.toString() }}>
        {children}
      </Link>
    );
  }
  if (buttonType === "button") {
    return (
      <button
        className={styles}
        type={buttonType}
        aria-controls={ariaControlId}
        aria-expanded={ariaExpanded}
        onPointerDown={(e) => {
          e.currentTarget.blur();
        }}
        onMouseUp={(e) => {
          clickHandler(e);
        }}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={styles} type={buttonType} disabled={isDisabled}>
      {children}
    </button>
  );
};
