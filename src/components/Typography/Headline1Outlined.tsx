import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Headline1Outlined: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <h1 className={twMerge(`text-body font-outline text-headlineout1 not-italic ${isSelectable}`, className)}>
      {children}
    </h1>
  );
};

export default Headline1Outlined;
