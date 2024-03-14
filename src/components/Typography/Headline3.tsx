import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Title3: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span style={{ color: color }} className={`font-header text-headline3 not-italic ${isSelectable}`}>
      {children}
    </span>
  );
};

export default Title3;
