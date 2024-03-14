'use client';

import { useState } from 'react';

import { ComponentSize } from '@utils/globalTypes';

import { TextButton } from '../Buttons';
import HomeButton from './Components/HomeButton/HomeButton';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import MobileMenuButton from './Components/MobileMenuButton/MobileMenuButton';
import { LINKS } from './constants';
import { NavbarProps } from './types';

const NavLinks = () => (
  <div className="hidden items-center pr-4 laptop:flex">
    <div className="flex space-x-4">
      {LINKS.map((link) => {
        return (
          <TextButton
            key={link.text}
            text={link.text}
            size={ComponentSize.MEDIUM}
            leadIcon={link.icon}
            isNavbarLink
            pathName={link.path}
          />
        );
      })}
    </div>
  </div>
);

const Navbar = ({ isNavigational = true }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => (
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-stretch justify-start tablet:items-center tablet:justify-center laptop:items-stretch laptop:justify-between">
        <HomeButton />
        {isNavigational && <NavLinks />}
      </div>
      {isNavigational && (
        <div className="absolute inset-y-0 right-0 flex items-center laptop:hidden">
          <MobileMenuButton toggleMobileMenu={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      )}
    </div>
  );

  return (
    <nav className={`border-b-2 border-line bg-background border-opacity-${isMobileMenuOpen ? '0' : '30'}`}>
      <div className="px-4 laptop:px-8">{renderContent()}</div>
      {isNavigational && <MobileMenu isOpen={isMobileMenuOpen} />}
    </nav>
  );
};

export default Navbar;
