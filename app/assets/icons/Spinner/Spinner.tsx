import { motion } from "framer-motion";
import * as React from "react";
import { theme } from "tailwind.config";

import { IconProps } from "@app/assets/icons/types";

const rect1 = {
  animating: {
    opacity: [0, 1],
    transition: {
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 0,
  },
};

const rect2 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 0.2,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect3 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 0.4,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect4 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 0.6,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect5 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 0.8,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect6 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 1,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect7 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 1.2,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect8 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 1.4,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect9 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 1.6,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect10 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 1.8,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect11 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 2,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const rect12 = {
  animating: {
    opacity: [1, 0, 1],
    transition: {
      delay: 2.2,
      repeat: Infinity,
      repeatDelay: 1.8,
    },
  },
  initial: {
    opacity: 1,
  },
};

const Spinner: React.FC<IconProps> = ({ width = 24, height = 24, outlineColor = theme.colors.primary.dark5 }) => (
  <svg className="block" width={width} height={height} viewBox="0 0 24 24" aria-hidden="true">
    <motion.rect
      variants={rect3}
      initial="initial"
      animate="animating"
      x="8"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect4}
      initial="initial"
      animate="animating"
      x="12"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect5}
      initial="initial"
      animate="animating"
      x="16"
      y="4"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect6}
      initial="initial"
      animate="animating"
      x="20"
      y="8"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect7}
      initial="initial"
      animate="animating"
      x="20"
      y="12"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect8}
      initial="initial"
      animate="animating"
      x="16"
      y="16"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect9}
      initial="initial"
      animate="animating"
      x="12"
      y="20"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect10}
      initial="initial"
      animate="animating"
      x="8"
      y="20"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect11}
      initial="initial"
      animate="animating"
      x="4"
      y="16"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect12}
      initial="initial"
      animate="animating"
      y="12"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect1}
      initial="initial"
      animate="animating"
      y="8"
      width="4"
      height="4"
      fill={outlineColor}
    />
    <motion.rect
      variants={rect2}
      initial="initial"
      animate="animating"
      x="4"
      y="4"
      width="4"
      height="4"
      fill={outlineColor}
    />
  </svg>
);

export default Spinner;
