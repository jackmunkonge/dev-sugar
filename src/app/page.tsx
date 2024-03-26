import { Body1, Headline2, Headline5 } from '@components/Typography';
import { CategorySearch } from '@components/index';

export default function Index() {
  const SiteIntro = () => (
    <header>
      <Headline5 className="text-center">the best learning resources for software devs</Headline5>
      <div className="flex flex-row items-center justify-center space-x-2">
        {/* TODO: Add real links counter */}
        <Headline5 className="text-primary">26,344</Headline5>
        <span>
          <Body1>links and counting!</Body1>
        </span>
      </div>
    </header>
  );

  // TODO: Replace headline with breadcrumb component

  return (
    <div className="flex flex-col flex-1">
      <SiteIntro />

      <Headline2 className="text-primary-dark1">Categories</Headline2>

      <CategorySearch className="bg-secondary-light5 mt-8" />
    </div>
  );
}
