import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-24 h-24 text-primary"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sprout stem */}
        <motion.path
          d="M 50 90 V 40"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          variants={pathVariants}
        />
        {/* Leaves */}
        <motion.path
          d="M 50 50 C 40 40, 30 50, 30 60"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants}
          style={{ transitionDelay: '0.5s' }}
        />
        <motion.path
          d="M 50 50 C 60 40, 70 50, 70 60"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants}
          style={{ transitionDelay: '0.7s' }}
        />
         <motion.path
          d="M 50 60 C 45 55, 40 60, 40 70"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants}
          style={{ transitionDelay: '0.9s' }}
        />
         <motion.path
          d="M 50 60 C 55 55, 60 60, 60 70"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          variants={pathVariants}
          style={{ transitionDelay: '1.1s' }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
