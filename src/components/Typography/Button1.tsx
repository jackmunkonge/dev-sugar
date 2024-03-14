import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Button1: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`font-sc tracking-wide05 text-button1 font-bold not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Button1;
