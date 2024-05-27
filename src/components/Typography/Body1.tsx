import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Body1: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return <p className={twMerge(`text-body font-body text-body1 not-italic ${isSelectable}`, className)}>{children}</p>;
};

export default Body1;
