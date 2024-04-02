'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { twMerge } from 'tailwind.config';

import { ButtonActionWrapperProps } from './types';

const ButtonWrapper: React.FC<ButtonActionWrapperProps> = ({
  className = '',
  children,
  isDisabled = false,
  isLoading = false,
  isFullWidth = false,
  isNavbarLink = false,
  isLink = false,
  externalLink,
  pathName,
  searchParams = '',
  buttonType = 'button',
  ariaControlId,
  ariaExpanded,
  clickHandler = () => {},
  ...restProps
}) => {
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
      <motion.div className={styles} {...restProps}>
        <a href={externalLink} target="_blank">
          {children}
        </a>
      </motion.div>
    );
  }

  if (isNavbarLink) {
    return (
      <motion.div className={styles} {...restProps}>
        <Link href={pathName}>{children}</Link>
      </motion.div>
    );
  }

  if (isLink) {
    return (
      <motion.div className={styles} {...restProps}>
        <Link href={pathName}>{children}</Link>
      </motion.div>
    );
  }

  if (buttonType === 'button') {
    return (
      <motion.button
        className={styles}
        type={buttonType}
        aria-controls={ariaControlId}
        aria-expanded={ariaExpanded}
        onClick={clickHandler}
        disabled={isDisabled}
        {...restProps}
      >
        {children}
      </motion.button>
    );
  }
  return (
    <motion.button className={styles} type={buttonType} disabled={isDisabled} {...restProps}>
      {children}
    </motion.button>
  );
};

export default ButtonWrapper;
