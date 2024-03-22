import { Twitter } from '@assets/icons';
import { ComponentSize } from '@utils/globalTypes';

import { IconOnlyButton, TextButton } from '../Buttons';
import { Body2 } from '../Typography';

const renderLeftContent = () => (
  <div className="flex h-full items-center justify-center px-3">
    {/* Socials */}
    <div className="flex flex-row space-x-3">
      <IconOnlyButton solid size={22} icon={Twitter} externalLink="https://twitter.com/jackmunkonge" />
    </div>
    {/* Divider */}
    <div className="mx-3 hidden h-full border-r-[1px] border-line laptop:block"></div>
    {/* Internal Links */}
    <div className="hidden space-x-3 laptop:flex laptop:flex-row">
      <TextButton text="sitemap" size={ComponentSize.SMALL} isLink pathName="/sitemap" />
      <TextButton text="cookies" size={ComponentSize.SMALL} isLink pathName="/cookies" />
    </div>
  </div>
);

const renderCenterContent = () => (
  <div className="flex h-full items-center justify-center px-3 text-center">
    <TextButton text="spare change?" size={ComponentSize.SMALL} isLink pathName="/donate" />
  </div>
);

const renderRightContent = () => {
  const currentDate = new Date();
  return (
    <div className="hidden h-full items-center justify-center px-3 tablet:flex">
      <Body2 className="text-primary-dark3">&copy; {currentDate.getFullYear()} jack munkonge</Body2>
    </div>
  );
};

const Footer = () => (
  <div className="flex h-8 items-center justify-between border-t-2 border-line border-opacity-30 bg-input px-4 py-2">
    {renderLeftContent()}
    {renderCenterContent()}
    {renderRightContent()}
  </div>
);

export default Footer;
