import { motion } from 'framer-motion';
import React from 'react';

type AnimationType = 'default' | 'zoom';

const animationVariants = {
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.9, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: -50 },
  }
};

const AnimatedPage = ({ children, type = 'default' }: { children: React.ReactNode, type?: AnimationType }) => {
  const variants = animationVariants[type];

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
