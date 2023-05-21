import clsx from 'clsx';
import { FC } from 'react';

import { ComponentSize } from '@app/utils/globalTypes';

const ButtonRight: FC<any> = ({
  size,
  outlineColor,
  fullHighlightColor,
  fullLowlightColor,
  lowlightColor,
  fillColor,
}) => {
  const LargeButtonRight = () => (
    <div className="flex flex-row items-center">
      <div>
        <div className={clsx('w-2 h-1', outlineColor)} />
        <div className={clsx('w-2 h-1', fullHighlightColor)} />
        <div className={clsx('w-2 h-10', fillColor)} />
        <div className={clsx('w-2 h-1', lowlightColor)} />
        <div className={clsx('w-2 h-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-3', fullHighlightColor)} />
        <div className={clsx('w-1 h-4', fillColor)} />
        <div className={clsx('w-1 h-2', fullLowlightColor)} />
        <div className={clsx('w-1 h-1', lowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-3', outlineColor)} />
        <div className={clsx('w-1 h-4', fullHighlightColor)} />
        <div className={clsx('w-1 h-3', outlineColor)} />
      </div>

      <div className={clsx('w-1 h-4', outlineColor)} />
    </div>
  );

  const MediumButtonRight = () => (
    <div className="flex flex-row items-center">
      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-1', fullHighlightColor)} />
        <div className={clsx('w-1 h-8', fillColor)} />
        <div className={clsx('w-1 h-1', lowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-3', fullHighlightColor)} />
        <div className={clsx('w-1 h-4', fillColor)} />
        <div className={clsx('w-1 h-2', fullLowlightColor)} />
        <div className={clsx('w-1 h-1', lowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-3', outlineColor)} />
        <div className={clsx('w-1 h-4', fullHighlightColor)} />
        <div className={clsx('w-1 h-3', outlineColor)} />
      </div>

      <div className={clsx('w-1 h-4', outlineColor)} />
    </div>
  );

  const SmallButtonRight = () => (
    <div className="flex flex-row items-center">
      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-1', fullHighlightColor)} />
        <div className={clsx('w-1 h-4', fillColor)} />
        <div className={clsx('w-1 h-1', lowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-2', outlineColor)} />
        <div className={clsx('w-1 h-4', fullHighlightColor)} />
        <div className={clsx('w-1 h-2', outlineColor)} />
      </div>

      <div className={clsx('w-1 h-4', outlineColor)} />
    </div>
  );

  let buttonRight = null;

  switch (size) {
    case ComponentSize.LARGE:
      buttonRight = <LargeButtonRight />
      break;
    case ComponentSize.MEDIUM:
      buttonRight = <MediumButtonRight />
      break;
    case ComponentSize.SMALL:
      buttonRight = <SmallButtonRight />
      break;
    default:
      break;
  }

  return buttonRight;
};

export default ButtonRight;
