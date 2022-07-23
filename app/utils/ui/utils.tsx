import { Link, NavLink } from "@remix-run/react";

import { ButtonActionWrapperProps } from "./types";

export const ButtonWrapper: React.FC<ButtonActionWrapperProps> = ({
  children,
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
  const styles = "group";

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
      >
        {children}
      </button>
    );
  }
  return (
    <button className={styles} type={buttonType}>
      {children}
    </button>
  );
};
