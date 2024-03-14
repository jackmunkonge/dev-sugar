import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Body2: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`font-default tracking-wide0025 text-body2 font-normal not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Body2;
