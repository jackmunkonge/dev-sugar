import { useState } from "react";

import { ComponentSize } from "@app/utils/globalTypes";

import { TextButton } from "../Buttons";
import { ButtonIconPosition } from "../Buttons/types";
import HomeButton from "./Components/HomeButton/HomeButton";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import MobileMenuButton from "./Components/MobileMenuButton/MobileMenuButton";
import { LINKS } from "./consts";

const NavLinks = () => (
  <div className="hidden items-center laptop:flex pr-4">
    <div className="flex space-x-4">
      {LINKS.map((link) => {
        return (
          <TextButton
            key={link.text}
            text={link.text}
            size={ComponentSize.MEDIUM}
            iconPosition={ButtonIconPosition.LEFT}
            icon={link.icon}
            isNavbarLink
            pathName={link.path}
          />
        );
      })}
    </div>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navStyles = isMobileMenuOpen ? "bg-background" : "bg-background border-b-2 border-line border-opacity-30";

  const renderContent = () => (
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-stretch justify-start tablet:items-center tablet:justify-center laptop:items-stretch laptop:justify-between">
        <HomeButton />
        <NavLinks />
      </div>
      {/*TODO: Make mobile menu modal absolutely positioned*/}
      <div className="absolute inset-y-0 right-0 flex items-center laptop:hidden">
        <MobileMenuButton toggleMobileMenu={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </div>
  );

  return (
    <nav className={navStyles}>
      <div className="px-4 laptop:px-8">{renderContent()}</div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
