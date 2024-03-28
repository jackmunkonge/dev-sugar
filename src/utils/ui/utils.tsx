import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tailwind.config';

import { ButtonActionWrapperProps } from './types';

export const ButtonWrapper: React.FC<ButtonActionWrapperProps> = ({
  className = '',
  children,
  isDisabled,
  isLoading,
  isFullWidth,
  isNavbarLink,
  isLink,
  externalLink,
  pathName,
  searchParams = '',
  buttonType,
  ariaControlId,
  ariaExpanded,
  clickHandler = () => {},
}) => {
  'use client';
  const styles = twMerge(
    clsx(
      'group',
      isFullWidth ? 'w-full' : 'w-fit',
      isDisabled && 'opacity-50',
      (isLoading || isDisabled) && 'pointer-events-none',
    ),
    className,
  );

  if (externalLink) {
    return (
      <div className={styles}>
        <a href={externalLink} target="_blank">
          {children}
        </a>
      </div>
    );
  }

  if (isNavbarLink) {
    return (
      <div className={styles}>
        <Link href={pathName}>{children}</Link>
      </div>
    );
  }

  if (isLink) {
    return (
      <div className={styles}>
        <Link href={pathName}>{children}</Link>
      </div>
    );
  }

  if (buttonType === 'button') {
    return (
      <button
        className={styles}
        type={buttonType}
        aria-controls={ariaControlId}
        aria-expanded={ariaExpanded}
        onClick={clickHandler}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={styles} type={buttonType} disabled={isDisabled}>
      {children}
    </button>
  );
};
