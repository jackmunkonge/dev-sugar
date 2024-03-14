import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Headline1Outlined: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`text-title1 tracking-tight015 font-outline font-medium not-italic ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Headline1Outlined;
