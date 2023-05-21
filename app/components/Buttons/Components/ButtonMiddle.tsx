import { ComponentSize } from '@app/utils/globalTypes';
import clsx from 'clsx';
import { FC } from 'react';

const ButtonMiddle: FC<any> = ({
  size,
  outlineColor,
  highlightColor,
  lowlightColor,
  fillColor,
  children,
}) => {
  const LargeButtonMiddle = () => (
    <div className={clsx(
      "flex flex-col w-full",
    )}>
      <div className={clsx('w-full h-1', outlineColor)} />
      <div className={clsx('w-full h-1', highlightColor)} />
      <div className={clsx('w-full h-12 flex items-center justify-center', fillColor)}>
        {children}
      </div>
      <div className={clsx('w-full h-1', lowlightColor)} />
      <div className={clsx('w-full h-1', outlineColor)} />
    </div>
  );

  const MediumButtonMiddle = () => (
    <div className={clsx(
      "flex flex-col w-full",
    )}>
      <div className={clsx('w-full h-1', outlineColor)} />
      <div className={clsx('w-full h-1', highlightColor)} />
      <div className={clsx('w-full h-10 flex items-center justify-center', fillColor)}>
        {children}
      </div>
      <div className={clsx('w-full h-1', lowlightColor)} />
      <div className={clsx('w-full h-1', outlineColor)} />
    </div>
  );

  const SmallButtonMiddle = () => (
    <div className={clsx(
      "flex flex-col w-full",
    )}>
      <div className={clsx('w-full h-1', outlineColor)} />
      <div className={clsx('w-full h-1', highlightColor)} />
      <div className={clsx('w-full h-6 flex items-center justify-center', fillColor)}>
        {children}
      </div>
      <div className={clsx('w-full h-1', lowlightColor)} />
      <div className={clsx('w-full h-1', outlineColor)} />
    </div>
  );

  let buttonMiddle = null;

  switch (size) {
    case ComponentSize.LARGE:
      buttonMiddle = <LargeButtonMiddle />
      break;
    case ComponentSize.MEDIUM:
      buttonMiddle = <MediumButtonMiddle />
      break;
    case ComponentSize.SMALL:
      buttonMiddle = <SmallButtonMiddle />
      break;
    default:
      break;
  }

  return buttonMiddle;
};

export default ButtonMiddle;
