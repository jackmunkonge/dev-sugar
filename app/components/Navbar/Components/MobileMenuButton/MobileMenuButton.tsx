import { theme } from "tailwind.config";

import { Cross, Hamburger } from "@app/assets/icons";

import { MobileMenuButtonProps } from "./types";

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  const { colors } = theme;

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center"
      aria-controls="mobile-menu"
      aria-expanded={isMobileMenuOpen}
      onClick={(e) => {
        toggleMobileMenu(!isMobileMenuOpen);
        e.currentTarget.blur();
      }}
    >
      <span className="sr-only">Open mobile/tablet menu</span>
      <div className={`${isMobileMenuOpen ? "hidden" : "block"}`}>
        <Hamburger outlineColor={colors.primary.DEFAULT} fillColor={colors.transparent} width={44} height={44} />
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Cross outlineColor={colors.primary.DEFAULT} fillColor={colors.transparent} width={44} height={44} />
      </div>
    </button>
  );
};

export default MobileMenuButton;
