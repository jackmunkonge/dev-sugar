import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Title5: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <h5 className={twMerge(`text-body font-header text-headline5 not-italic ${isSelectable}`, className)}>
      {children}
    </h5>
  );
};

export default Title5;
