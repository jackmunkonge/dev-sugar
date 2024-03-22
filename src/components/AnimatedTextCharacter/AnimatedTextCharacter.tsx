'use client';

import { motion } from 'framer-motion';

const AnimatedTextCharacter: React.FC<{ text: string }> = ({ text }) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        repeatDelay: 0.2,
      },
    },
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror' as const,
        repeatDelay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div className="overflow-hidden flex" variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
