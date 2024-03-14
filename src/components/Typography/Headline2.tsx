import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Headline2: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span style={{ color: color }} className={`font-header text-headline2 not-italic ${isSelectable}`}>
      {children}
    </span>
  );
};

export default Headline2;
