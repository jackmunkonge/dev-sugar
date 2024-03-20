import clsx from 'clsx';
import { FC } from 'react';

import { ComponentSize } from '@utils/globalTypes';

const ButtonRight: FC<any> = ({ size, fullLowlightColor, outlineColor, fillColor }) => {
  const LargeButtonRight = () => (
    <div className="flex flex-row items-center">
      <div>
        <div className={clsx('h-1 w-2', outlineColor)} />
        <div className={clsx('h-1 w-2', fullLowlightColor)} />
        <div className={clsx('h-10 w-2', fillColor)} />
        <div className={clsx('h-1 w-2', fullLowlightColor)} />
        <div className={clsx('h-1 w-2', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-3 w-1', fullLowlightColor)} />
        <div className={clsx('h-4 w-1', fillColor)} />
        <div className={clsx('h-3 w-1', fullLowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-3 w-1', outlineColor)} />
        <div className={clsx('h-4 w-1', fullLowlightColor)} />
        <div className={clsx('h-3 w-1', outlineColor)} />
      </div>

      <div className={clsx('h-4 w-1', outlineColor)} />
    </div>
  );

  const MediumButtonRight = () => (
    <div className="flex flex-row items-center">
      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-1 w-1', fullLowlightColor)} />
        <div className={clsx('h-8 w-1', fillColor)} />
        <div className={clsx('h-1 w-1', fullLowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-3 w-1', fullLowlightColor)} />
        <div className={clsx('h-4 w-1', fillColor)} />
        <div className={clsx('h-3 w-1', fullLowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-3 w-1', outlineColor)} />
        <div className={clsx('h-4 w-1', fullLowlightColor)} />
        <div className={clsx('h-3 w-1', outlineColor)} />
      </div>

      <div className={clsx('h-4 w-1', outlineColor)} />
    </div>
  );

  const SmallButtonRight = () => (
    <div className="flex flex-row items-center">
      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-1 w-1', fullLowlightColor)} />
        <div className={clsx('h-4 w-1', fillColor)} />
        <div className={clsx('h-1 w-1', fullLowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-2 w-1', outlineColor)} />
        <div className={clsx('h-4 w-1', fullLowlightColor)} />
        <div className={clsx('h-2 w-1', outlineColor)} />
      </div>

      <div className={clsx('h-4 w-1', outlineColor)} />
    </div>
  );

  let buttonRight = null;

  switch (size) {
    case ComponentSize.LARGE:
      buttonRight = <LargeButtonRight />;
      break;
    case ComponentSize.MEDIUM:
      buttonRight = <MediumButtonRight />;
      break;
    case ComponentSize.SMALL:
      buttonRight = <SmallButtonRight />;
      break;
    default:
      break;
  }

  return buttonRight;
};

export default ButtonRight;
