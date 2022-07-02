import Logo from "@app/components/Logo/Logo";
import LogoText from "@app/components/LogoText/LogoText";

const HomeButton = () => (
  <a href="/" className="flex items-center justify-center hover:opacity-50 active:opacity-100">
    <div className="block px-1 tablet:hidden">
      <Logo width={44} height={44} />
    </div>
    <div className="hidden px-2 tablet:block laptop:hidden">
      <LogoText />
    </div>
    <div className="hidden px-4 laptop:block">
      <LogoText />
    </div>
  </a>
);

export default HomeButton;
