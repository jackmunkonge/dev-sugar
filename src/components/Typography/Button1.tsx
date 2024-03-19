import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Button1: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span className={twMerge(`text-body font-caps text-button1 not-italic ${isSelectable}`, className)}>
      {children}
    </span>
  );
};

export default Button1;
