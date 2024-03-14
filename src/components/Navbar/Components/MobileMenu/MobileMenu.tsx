import { usePathname } from 'next/navigation';

import { LINKS } from '@components/Navbar/constants';
import { Button1 } from '@components/Typography';
import { ariaControlIds } from '@components/constants';
import { theme } from '@utils/globalConstants';

import { MobileMenuProps } from './types';

const renderLinks = (path: string) => {
  const { colors } = theme;

  return (
    <div className="space-y-1 px-2 pb-3 pt-2 outline-dashed outline-4 outline-line">
      {LINKS.map((link) => {
        const current = path === link.path;
        return (
          <a key={link.text} href={link.path} className="block px-3 py-2" aria-current={current ? 'page' : 'false'}>
            <Button1 color={current ? colors.primary.light3 : colors.body}>{link.text}</Button1>
          </a>
        );
      })}
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const path = usePathname();

  return (
    <div className={`${isOpen ? 'absolute' : 'hidden'} w-full bg-background pb-2`} id={ariaControlIds.MOBILE_MENU}>
      {renderLinks(path)}
    </div>
  );
};

export default MobileMenu;
