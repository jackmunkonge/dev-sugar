import clsx from 'clsx';
import { FC } from 'react';

import { ComponentSize } from '@utils/globalTypes';

const ButtonMiddle: FC<any> = ({ size, outlineColor, highlightColor, lowlightColor, fillColor, children }) => {
  const LargeButtonMiddle = () => (
    <div className={clsx('flex w-full flex-col')}>
      <div className={clsx('h-1 w-full', outlineColor)} />
      <div className={clsx('h-1 w-full', highlightColor)} />
      <div className={clsx('flex h-12 w-full items-center justify-center', fillColor)}>{children}</div>
      <div className={clsx('h-1 w-full', lowlightColor)} />
      <div className={clsx('h-1 w-full', outlineColor)} />
    </div>
  );

  const MediumButtonMiddle = () => (
    <div className={clsx('flex w-full flex-col')}>
      <div className={clsx('h-1 w-full', outlineColor)} />
      <div className={clsx('h-1 w-full', highlightColor)} />
      <div className={clsx('flex h-10 w-full items-center justify-center', fillColor)}>{children}</div>
      <div className={clsx('h-1 w-full', lowlightColor)} />
      <div className={clsx('h-1 w-full', outlineColor)} />
    </div>
  );

  const SmallButtonMiddle = () => (
    <div className={clsx('flex w-full flex-col')}>
      <div className={clsx('h-1 w-full', outlineColor)} />
      <div className={clsx('h-1 w-full', highlightColor)} />
      <div className={clsx('flex h-6 w-full items-center justify-center', fillColor)}>{children}</div>
      <div className={clsx('h-1 w-full', lowlightColor)} />
      <div className={clsx('h-1 w-full', outlineColor)} />
    </div>
  );

  let buttonMiddle = null;

  switch (size) {
    case ComponentSize.LARGE:
      buttonMiddle = <LargeButtonMiddle />;
      break;
    case ComponentSize.MEDIUM:
      buttonMiddle = <MediumButtonMiddle />;
      break;
    case ComponentSize.SMALL:
      buttonMiddle = <SmallButtonMiddle />;
      break;
    default:
      break;
  }

  return buttonMiddle;
};

export default ButtonMiddle;
