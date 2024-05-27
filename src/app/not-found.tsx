import { Metadata } from 'next';

import { SadJar } from '@assets/images';
import { SolidButton } from '@components/Buttons';
import { Headline2, Headline3, Headline5 } from '@components/Typography';

export const metadata: Metadata = {
  title: 'Dev Sugar | Not Found',
  description: 'The ultimate hub for dev resources',
};

export default function NotFound() {
  const heading = "The resource you're looking for wasn't found";

  return (
    <div className="flex flex-col flex-1">
      <header className="flex items-end justify-center px-2 text-center">
        <div className="hidden laptop:block">
          <Headline2>{heading}</Headline2>
        </div>
        <div className="hidden tablet:block laptop:hidden">
          <Headline3>{heading}</Headline3>
        </div>
        <div className="tablet:hidden">
          <Headline5>{heading}</Headline5>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-8">
        <SadJar width={500} height={500} />
      </div>

      <div className="w-full flex justify-center items-center">
        <SolidButton text="Return home" isLink pathName="/" />
      </div>
    </div>
  );
}
