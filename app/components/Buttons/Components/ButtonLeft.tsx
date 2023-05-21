import { ComponentSize } from '@app/utils/globalTypes';
import clsx from 'clsx';
import { FC } from 'react';

const ButtonLeft: FC<any> = ({
  size,
  fullLowlightColor,
  outlineColor,
  highlightColor,
  lowlightColor,
  fillColor,
}) => {
  const LargeButtonLeft = () => (
    <div className="flex flex-row items-center">
      <div className={clsx('w-1 h-4', outlineColor)} />

      <div>
        <div className={clsx('w-1 h-3', outlineColor)} />
        <div className={clsx('w-1 h-4', highlightColor)} />
        <div className={clsx('w-1 h-3', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-3', highlightColor)} />
        <div className={clsx('w-1 h-4', fillColor)} />
        <div className={clsx('w-1 h-2', fullLowlightColor)} />
        <div className={clsx('w-1 h-1', lowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-2 h-1', outlineColor)} />
        <div className={clsx('w-2 h-1', highlightColor)} />
        <div className={clsx('w-2 h-10', fillColor)} />
        <div className={clsx('w-2 h-1', lowlightColor)} />
        <div className={clsx('w-2 h-1', outlineColor)} />
      </div>
    </div>
  );

  const MediumButtonLeft = () => (
    <div className="flex flex-row items-center">
      <div className={clsx('w-1 h-4', outlineColor)} />

      <div>
        <div className={clsx('w-1 h-3', outlineColor)} />
        <div className={clsx('w-1 h-4', highlightColor)} />
        <div className={clsx('w-1 h-3', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-3', highlightColor)} />
        <div className={clsx('w-1 h-4', fillColor)} />
        <div className={clsx('w-1 h-2', fullLowlightColor)} />
        <div className={clsx('w-1 h-1', lowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-1', highlightColor)} />
        <div className={clsx('w-1 h-8', fillColor)} />
        <div className={clsx('w-1 h-1', lowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>
    </div>
  );

  const SmallButtonLeft = () => (
    <div className="flex flex-row items-center">
      <div className={clsx('w-1 h-4', outlineColor)} />

      <div>
        <div className={clsx('w-1 h-2', outlineColor)} />
        <div className={clsx('w-1 h-4', highlightColor)} />
        <div className={clsx('w-1 h-2', outlineColor)} />
      </div>

      <div>
        <div className={clsx('w-1 h-1', outlineColor)} />
        <div className={clsx('w-1 h-1', highlightColor)} />
        <div className={clsx('w-1 h-4', fillColor)} />
        <div className={clsx('w-1 h-1', fullLowlightColor)} />
        <div className={clsx('w-1 h-1', outlineColor)} />
      </div>
    </div>
  );

  let buttonLeft = null;

  switch (size) {
    case ComponentSize.LARGE:
      buttonLeft = <LargeButtonLeft />
      break;
    case ComponentSize.MEDIUM:
      buttonLeft = <MediumButtonLeft />
      break;
    case ComponentSize.SMALL:
      buttonLeft = <SmallButtonLeft />
      break;
    default:
      break;
  }

  return buttonLeft;
};

export default ButtonLeft;
