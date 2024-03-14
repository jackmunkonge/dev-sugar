import React from 'react';

import { IconProps } from '@assets/icons/types';

export type Navlink = {
  path: string;
  text: string;
  icon: React.FC<IconProps>;
};

export type NavbarProps = {
  isNavigational?: boolean;
};
