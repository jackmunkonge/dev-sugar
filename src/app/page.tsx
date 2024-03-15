import TestForm from '@components/TestForm/TestForm';
import { Body1, Headline5 } from '@components/Typography';
import { CategorySearch } from '@components/index';

export default function Index() {
  return (
    <div className="flex flex-col">
      <header className="px-2">
        <h1 className="text-center">
          <Headline5>the best learning resources for software devs</Headline5>
        </h1>
        <p className="flex flex-row items-center justify-center">
          {/* TODO: Add real links counter */}
          <Headline5 className="text-primary">26,344</Headline5>
          <span className="ml-2">
            <Body1>links and counting!</Body1>
          </span>
        </p>

        <TestForm />
      </header>
      <div className="flex-1 bg-secondary-light5">
        <CategorySearch />
      </div>
    </div>
  );
}
