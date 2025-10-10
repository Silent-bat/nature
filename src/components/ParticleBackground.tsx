import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ParticleProps {
  type: 'snow' | 'bubbles' | 'sand';
  isActive: boolean;
}

const Particle = React.memo(({ type, style }: { type: ParticleProps['type'], style: React.CSSProperties }) => {
  const variants = {
    snow: {
      y: [0, 800],
      x: [0, Math.random() * 60 - 30],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: Math.random() * 10 + 8,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 18,
      },
    },
    bubbles: {
      y: [150, -150],
      x: [0, Math.random() * 40 - 20],
      opacity: [0, 0.8, 0.8, 0],
      scale: [0.2, 1, 1, 1.5],
      transition: {
        duration: Math.random() * 12 + 10,
        repeat: Infinity,
        ease: "easeOut",
        delay: Math.random() * 15,
      },
    },
    sand: {
      x: [0, (Math.random() - 0.5) * 400],
      y: [0, (Math.random() - 0.5) * 150],
      opacity: [0, 0.5, 0],
      transition: {
        duration: Math.random() * 6 + 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 9,
      },
    },
  };

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    ...style,
  };

  const typeStyle = {
    snow: { background: 'rgba(255, 255, 255, 0.8)', width: Math.random() * 5 + 2, height: Math.random() * 5 + 2, filter: 'blur(1.5px)' },
    bubbles: { border: '2px solid rgba(255, 255, 255, 0.5)', width: Math.random() * 35 + 15, height: Math.random() * 35 + 15 },
    sand: { background: '#D2B48C', width: Math.random() * 3 + 1, height: Math.random() * 3 + 1, filter: 'blur(1px)' },
  };

  return (
    <motion.div
      style={{ ...baseStyle, ...typeStyle[type] }}
      animate={variants[type]}
    />
  );
});

const ParticleBackground: React.FC<ParticleProps> = ({ type, isActive }) => {
  const particleCount = type === 'bubbles' ? 80 : 400; // Increased count
  const particles = React.useMemo(() => Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
  })), [particleCount]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]"
        >
          {particles.map((particle) => (
            <Particle key={particle.id} type={type} style={particle.style} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(ParticleBackground);
