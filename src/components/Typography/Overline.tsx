import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Overline: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`tracking-wide015 font-mono text-overline font-normal uppercase not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Overline;