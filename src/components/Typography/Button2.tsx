import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Button2: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`font-sc tracking-wide025 text-button2 font-bold not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Button2;
