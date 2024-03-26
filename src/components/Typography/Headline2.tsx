import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Headline2: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <h2 className={twMerge(`text-body font-header text-headline2 not-italic ${isSelectable}`, className)}>
      {children}
    </h2>
  );
};

export default Headline2;
