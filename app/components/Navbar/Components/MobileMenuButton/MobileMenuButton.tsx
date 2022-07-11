import { Cross, Hamburger } from "@app/assets/icons";
import IconButton from "@app/components/Buttons/IconButton/IconButton";
import { ariaControlIds } from "@app/components/consts";

import { MobileMenuButtonProps } from "./types";

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.currentTarget.blur();
    toggleMobileMenu(!isMobileMenuOpen);
  };
  return (
    // <IconButton
    //   size={44}
    //   icon={isMobileMenuOpen ? Cross : Hamburger}
    //   buttonType="button"
    //   ariaControlId={ariaControlIds.MOBILE_MENU}
    //   ariaExpanded={isMobileMenuOpen}
    //   clickHandler={clickHandler}
    // >
    //   <span className="sr-only">Open mobile/tablet menu</span>
    // </IconButton>
    // TODO: Add srOnly text prop to IconButton
    <IconButton
      size={44}
      icon={isMobileMenuOpen ? Cross : Hamburger}
      buttonType="button"
      ariaControlId={ariaControlIds.MOBILE_MENU}
      ariaExpanded={isMobileMenuOpen}
      clickHandler={clickHandler}
    />
  );
};

export default MobileMenuButton;
