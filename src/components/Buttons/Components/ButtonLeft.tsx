import clsx from 'clsx';
import { FC } from 'react';

import { ComponentSize } from '@utils/globalTypes';

const ButtonLeft: FC<any> = ({ size, fullLowlightColor, outlineColor, highlightColor, lowlightColor, fillColor }) => {
  const LargeButtonLeft = () => (
    <div className="flex flex-row items-center">
      <div className={clsx('h-4 w-1', outlineColor)} />

      <div>
        <div className={clsx('h-3 w-1', outlineColor)} />
        <div className={clsx('h-4 w-1', highlightColor)} />
        <div className={clsx('h-3 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-3 w-1', highlightColor)} />
        <div className={clsx('h-4 w-1', fillColor)} />
        <div className={clsx('h-2 w-1', fullLowlightColor)} />
        <div className={clsx('h-1 w-1', lowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-2', outlineColor)} />
        <div className={clsx('h-1 w-2', highlightColor)} />
        <div className={clsx('h-10 w-2', fillColor)} />
        <div className={clsx('h-1 w-2', lowlightColor)} />
        <div className={clsx('h-1 w-2', outlineColor)} />
      </div>
    </div>
  );

  const MediumButtonLeft = () => (
    <div className="flex flex-row items-center">
      <div className={clsx('h-4 w-1', outlineColor)} />

      <div>
        <div className={clsx('h-3 w-1', outlineColor)} />
        <div className={clsx('h-4 w-1', highlightColor)} />
        <div className={clsx('h-3 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-3 w-1', highlightColor)} />
        <div className={clsx('h-4 w-1', fillColor)} />
        <div className={clsx('h-2 w-1', fullLowlightColor)} />
        <div className={clsx('h-1 w-1', lowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-1 w-1', highlightColor)} />
        <div className={clsx('h-8 w-1', fillColor)} />
        <div className={clsx('h-1 w-1', lowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>
    </div>
  );

  const SmallButtonLeft = () => (
    <div className="flex flex-row items-center">
      <div className={clsx('h-4 w-1', outlineColor)} />

      <div>
        <div className={clsx('h-2 w-1', outlineColor)} />
        <div className={clsx('h-4 w-1', highlightColor)} />
        <div className={clsx('h-2 w-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-1 w-1', highlightColor)} />
        <div className={clsx('h-4 w-1', fillColor)} />
        <div className={clsx('h-1 w-1', fullLowlightColor)} />
        <div className={clsx('h-1 w-1', outlineColor)} />
      </div>
    </div>
  );

  let buttonLeft = null;

  switch (size) {
    case ComponentSize.LARGE:
      buttonLeft = <LargeButtonLeft />;
      break;
    case ComponentSize.MEDIUM:
      buttonLeft = <MediumButtonLeft />;
      break;
    case ComponentSize.SMALL:
      buttonLeft = <SmallButtonLeft />;
      break;
    default:
      break;
  }

  return buttonLeft;
};

export default ButtonLeft;
