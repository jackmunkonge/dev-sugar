import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Caption: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span className={twMerge(`text-body font-mono text-caption not-italic ${isSelectable}`, className)}>
      {children}
    </span>
  );
};

export default Caption;
