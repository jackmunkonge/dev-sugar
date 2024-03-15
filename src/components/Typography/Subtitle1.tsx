import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Subtitle1: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span className={twMerge(`text-body font-header text-subtitle1 not-italic ${isSelectable}`, className)}>
      {children}
    </span>
  );
};

export default Subtitle1;
