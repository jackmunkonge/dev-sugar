import { useState } from "react";

import { Lightbulb } from "@app/assets/icons";
import { ComponentSize } from "@app/utils/globalTypes";

import { TextButton } from "../Buttons";
import { ButtonIconPosition } from "../Buttons/types";
import HomeButton from "./Components/HomeButton/HomeButton";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import MobileMenuButton from "./Components/MobileMenuButton/MobileMenuButton";

const NavLinks = () => (
  <div className="hidden items-center laptop:flex pr-4">
    <div className="flex space-x-4">
      <TextButton
        text="Submission"
        size={ComponentSize.LARGE}
        iconPosition={ButtonIconPosition.LEFT}
        icon={Lightbulb}
        isNavbarLink
        pathName="/"
      />
    </div>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => (
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-stretch justify-start tablet:items-center tablet:justify-center laptop:items-stretch laptop:justify-between">
        <HomeButton />
        <NavLinks />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center laptop:hidden">
        <MobileMenuButton toggleMobileMenu={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </div>
  );

  return (
    <nav className="bg-background border-b-2 border-line border-opacity-30">
      <div className="px-4 laptop:px-8">{renderContent()}</div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
