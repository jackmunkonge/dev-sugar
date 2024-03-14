import * as React from 'react';

import { theme } from '@utils/globalConstants';

import { IconProps } from '../types';

const Scroll: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  isSelected = false,
  outlineColor = theme.colors.primary.DEFAULT,
  fillColor = theme.colors.primary.DEFAULT,
  selectedOutlineColor = theme.colors.primary.light3,
  selectedFillColor = theme.colors.primary.light3,
}) => (
  <svg className="block" width={width} height={height} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M18 15.3335V17.3335H9V16.3335H8V6.3335H7V8.3335H6V5.3335H15V6.3335H16V14.3335H10V15.3335H18Z"
      fill={isSelected ? selectedFillColor : fillColor}
    />
    <path d="M16 5.3335L15 5.3335L15 6.3335H16V5.3335Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M8 16.3335L9 16.3335V17.3335L8 17.3335V16.3335Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M15 5.3335V4.3335L6 4.3335V5.3335L15 5.3335Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M6 5.3335H5L5 8.3335H6L6 5.3335Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path
      d="M8 6.3335H7V8.3335L6 8.3335L6 9.3335H7L7 16.3335H8L8 6.3335Z"
      fill={isSelected ? selectedOutlineColor : outlineColor}
    />
    <path d="M14 9.3335V8.3335H10V9.3335L14 9.3335Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M12 12.3335V11.3335H10V12.3335L12 12.3335Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path
      d="M10 14.3335L10 15.3335H18V14.3335H17L17 6.3335L16 6.3335L16 14.3335L10 14.3335Z"
      fill={isSelected ? selectedOutlineColor : outlineColor}
    />
    <path d="M19 15.3335H18V17.3335L19 17.3335V15.3335Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
    <path d="M9 17.3335V18.3335L18 18.3335V17.3335H9Z" fill={isSelected ? selectedOutlineColor : outlineColor} />
  </svg>
);

export default Scroll;
