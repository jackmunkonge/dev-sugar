import clsx from 'clsx';
import { FC } from 'react';

const ButtonRight: FC<any> = ({ outlineColor, fullLowlightColor, fillColor }) => {
  return (
    <div className="flex flex-row items-center">
      <div>
        <div className={clsx('h-1 w-2', outlineColor)} />
        <div className={clsx('h-1 w-2', fullLowlightColor)} />
        <div className={clsx('h-10 w-2', fillColor)} />
        <div className={clsx('h-1 w-2', fullLowlightColor)} />
        <div className={clsx('h-1 w-2', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-2', outlineColor)} />
        <div className={clsx('h-1 w-2', fullLowlightColor)} />
        <div className={clsx('h-8 w-2', fillColor)} />
        <div className={clsx('h-1 w-2', fullLowlightColor)} />
        <div className={clsx('h-1 w-2', outlineColor)} />
      </div>

      <div>
        <div className={clsx('h-1 w-1', outlineColor)} />
        <div className={clsx('h-2 w-1', fullLowlightColor)} />
        <div className={clsx('h-4 w-1', fillColor)} />
        <div className={clsx('h-2 w-1', fullLowlightColor)} />
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
};

export default ButtonRight;
