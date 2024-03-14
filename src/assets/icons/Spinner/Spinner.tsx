'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import { IconProps } from '@assets/icons/types';
import { theme } from '@utils/globalConstants';

// TODO: Convert to raw CSS
const rect = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
      repeatDelay: 0.6,
    },
  },
  initial: {
    opacity: 1,
  },
};

const svg = {
  animating: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  initial: {
    opacity: 0,
  },
};

const Spinner: React.FC<IconProps> = ({ width = 24, height = 24, outlineColor = theme.colors.primary.dark5 }) => (
  <motion.svg
    variants={svg}
    initial="initial"
    animate="animating"
    className="block"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <motion.rect variants={rect} x="8" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="12" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="16" y="4" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="20" y="8" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="20" y="12" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="16" y="16" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="12" y="20" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="8" y="20" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="4" y="16" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} y="12" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} y="8" width="4" height="4" fill={outlineColor} />
    <motion.rect variants={rect} x="4" y="4" width="4" height="4" fill={outlineColor} />
  </motion.svg>
);

export default Spinner;
