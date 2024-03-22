import { Cross, Hamburger } from '@assets/icons';
import { IconOnlyButton } from '@components/Buttons';
import { ariaControlIds } from '@components/constants';

import { MobileMenuButtonProps } from './types';

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.currentTarget.blur();
    toggleMobileMenu(!isMobileMenuOpen);
  };
  return (
    <IconOnlyButton
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
