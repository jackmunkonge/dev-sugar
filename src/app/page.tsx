import { Body1, Headline5 } from '@components/Typography';
import { CategorySearch } from '@components/index';
import { TOTAL_LINKS } from '@utils/globalConstants';

export default function Index() {
  const SiteIntro = () => (
    <header>
      <Headline5 className="text-center">the best learning resources for software devs</Headline5>
      <div className="flex flex-row items-center justify-center space-x-2">
        <Headline5 className="text-primary">{TOTAL_LINKS.toLocaleString()}</Headline5>
        <span>
          <Body1>links and counting!</Body1>
        </span>
      </div>
    </header>
  );

  return (
    <div className="flex flex-col flex-1">
      <SiteIntro />

      <CategorySearch className="border border-secondary-light5 mt-8" />
    </div>
  );
}
