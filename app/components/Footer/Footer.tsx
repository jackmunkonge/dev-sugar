import { theme } from "tailwind.config";

import { Twitter } from "@app/assets/icons";
import { ComponentSize } from "@app/utils/globalTypes";

import { IconButton, TextButton } from "../Buttons";
import { Body2 } from "../Typography";

const renderLeftContent = () => (
  <div className="flex justify-center items-center h-full px-3">
    {/* Socials */}
    <div className="flex flex-row space-x-3">
      <IconButton solid size={22} icon={Twitter} externalLink="https://twitter.com/jackmunkonge" />
    </div>
    {/* Divider */}
    <div className="hidden laptop:block border-r-[1px] border-line h-full mx-3"></div>
    {/* Internal Links */}
    <div className="hidden laptop:flex laptop:flex-row space-x-3">
      <TextButton text="sitemap" size={ComponentSize.SMALL} isLink pathName="/sitemap" />
      <TextButton text="cookies" size={ComponentSize.SMALL} isLink pathName="/cookies" />
    </div>
  </div>
);

const renderCenterContent = () => (
  <div className="flex justify-center items-center h-full px-3 text-center">
    <TextButton text="spare change?" size={ComponentSize.SMALL} isLink pathName="/donate" />
  </div>
);

const renderRightContent = () => {
  const currentDate = new Date();
  return (
    <div className="hidden tablet:flex justify-center items-center h-full px-3">
      <Body2 color={theme.colors.primary.dark3}>&copy; {currentDate.getFullYear()} jack munkonge</Body2>
    </div>
  );
};

const Footer = () => (
  <div className="bg-input flex justify-between items-center h-8 py-2 px-4 border-line border-t-2 border-opacity-30">
    {renderLeftContent()}
    {renderCenterContent()}
    {renderRightContent()}
  </div>
);

export default Footer;
