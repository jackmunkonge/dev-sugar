import { Body1, Headline5 } from '@components/Typography';
import { CategorySearch } from '@components/index';
import { HOME_PAGE_MOTTO_1, HOME_PAGE_MOTTO_2, TOTAL_LINKS } from '@utils/globalConstants';

export default function Index() {
  const SiteIntro = ({ className = '' }) => (
    <header className={className}>
      <Headline5 className="text-center">{HOME_PAGE_MOTTO_1}</Headline5>
      <div className="flex flex-row items-center justify-center space-x-2">
        <Headline5 className="text-primary">{TOTAL_LINKS.toLocaleString()}</Headline5>
        <span>
          <Body1>{HOME_PAGE_MOTTO_2}</Body1>
        </span>
      </div>
    </header>
  );

  return (
    <div className="flex flex-col flex-1">
      <SiteIntro className="px-2" />
      <CategorySearch className="mt-8" />
    </div>
  );
}
