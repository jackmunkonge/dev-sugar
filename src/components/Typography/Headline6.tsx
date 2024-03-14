import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Title6: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`font-sc text-title6 tracking-wide0015 font-bold not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Title6;
