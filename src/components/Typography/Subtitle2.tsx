import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Subtitle2: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`font-default tracking-wide001 text-subtitle2 font-bold not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Subtitle2;
