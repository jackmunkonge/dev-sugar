import React from 'react';

import { theme } from '@utils/globalConstants';

import { TypographyProps } from './types';

const Title5: React.FC<TypographyProps> = ({ children, color = theme.colors.body, selectable = false }) => {
  const isSelectable = selectable ? 'select-auto' : 'select-none';
  return (
    <span
      style={{ color: color }}
      className={`font-sc text-title5 font-normal not-italic tracking-normal ${isSelectable}`}
    >
      {children}
    </span>
  );
};

export default Title5;
