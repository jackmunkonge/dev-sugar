import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Body1: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`font-default tracking-wide005 text-body1 font-normal not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Body1;
