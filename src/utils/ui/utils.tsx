import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tailwind.config';

import { ButtonActionWrapperProps } from './types';

export const ButtonWrapper: React.FC<ButtonActionWrapperProps> = ({
  classNames = '',
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
      isDisabled && 'opacity-50 pointer-events-none',
      isLoading && !isDisabled && 'pointer-events-none',
    ),
    classNames,
  );

  if (externalLink) {
    return (
      <a href={externalLink} target="_blank">
        {children}
      </a>
    );
  }

  if (isNavbarLink) {
    return (
      <Link className={styles} href={pathName}>
        {children}
      </Link>
    );
  }

  if (isLink) {
    return (
      <Link className={styles} href={pathName}>
        {children}
      </Link>
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
