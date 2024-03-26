import React from 'react';
import { twMerge } from 'tailwind.config';

import { TypographyProps } from './types';

const Title3: React.FC<TypographyProps> = ({ className = '', children, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <h3 className={twMerge(`text-body font-header text-headline3 not-italic ${isSelectable}`, className)}>
      {children}
    </h3>
  );
};

export default Title3;
