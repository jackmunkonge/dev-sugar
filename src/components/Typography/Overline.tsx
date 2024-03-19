import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Overline: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span className={twMerge(`text-body font-mono text-overline uppercase not-italic ${isSelectable}`, className)}>
      {children}
    </span>
  );
};

export default Overline;
