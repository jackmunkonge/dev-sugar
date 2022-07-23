import { Cross, Hamburger } from "@app/assets/icons";
import { IconButton } from "@app/components/Buttons";
import { ariaControlIds } from "@app/components/consts";

import { MobileMenuButtonProps } from "./types";

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.currentTarget.blur();
    toggleMobileMenu(!isMobileMenuOpen);
  };
  return (
    <IconButton
      size={44}
      icon={isMobileMenuOpen ? Cross : Hamburger}
      buttonType="button"
      ariaControlId={ariaControlIds.MOBILE_MENU}
      ariaExpanded={isMobileMenuOpen}
      clickHandler={clickHandler}
      srOnlyText="Open mobile/tablet menu"
    />
  );
};

export default MobileMenuButton;
