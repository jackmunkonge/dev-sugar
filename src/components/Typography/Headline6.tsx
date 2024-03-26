import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Title6: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <h6 className={twMerge(`text-body font-header text-headline6 not-italic ${isSelectable}`, className)}>
      {children}
    </h6>
  );
};

export default Title6;
