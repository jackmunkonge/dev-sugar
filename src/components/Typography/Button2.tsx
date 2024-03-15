import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Button2: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span className={twMerge(`text-body font-caps text-button2 not-italic ${isSelectable}`, className)}>
      {children}
    </span>
  );
};

export default Button2;
