import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Headline4: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <h4 className={twMerge(`text-body font-header text-headline4 not-italic ${isSelectable}`, className)}>
      {children}
    </h4>
  );
};

export default Headline4;
