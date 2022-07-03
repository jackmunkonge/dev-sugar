import { useLoaderData } from "@remix-run/react";
import { theme } from "tailwind.config";

import { Button1 } from "@app/components/Typography";

import { LINKS } from "../../consts";
import { MobileMenuProps } from "./types";

const renderLinks = () => {
  const { path } = useLoaderData();
  const { colors } = theme;

  return (
    <div className="space-y-1 px-2 pt-2 pb-3 outline-line outline-4 outline-dotted">
      {LINKS.map((link) => {
        const current = path === link.path;
        return (
          <a href={link.path} className="block px-3 py-2" aria-current={current ? "page" : "false"}>
            <Button1 color={current ? colors.primary.light3 : colors.body}>{link.text}</Button1>
          </a>
        );
      })}
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => (
  <div className={`${isOpen ? "block" : "hidden"}`} id="mobile-menu">
    {renderLinks()}
  </div>
);

export default MobileMenu;
