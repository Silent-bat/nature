import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Leaf } from 'lucide-react';

const FallingLeaf = ({ x, rotation, size, duration, delay, mouseX }: { x: number, rotation: number, size: number, duration: number, delay: number, mouseX: any }) => {
  const wind = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 0], [-200, 200], { clamp: false });
  
  return (
    <motion.div
      className="absolute text-primary/40"
      style={{
        left: `${x}%`,
        top: '-10%',
        rotate: rotation,
        x: wind,
      }}
      animate={{
        top: '110%',
        rotate: rotation + (Math.random() > 0.5 ? 360 : -360),
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    >
      <Leaf size={size} />
    </motion.div>
  );
};

const FallingLeaves = React.memo(({ count = 50 }) => {
  const [leaves, setLeaves] = useState<any[]>([]);
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      rotation: Math.random() * 360,
      size: Math.random() * 25 + 15, // Increased size
      duration: Math.random() * 12 + 12, // Increased duration
      delay: Math.random() * 20,
    }));
    setLeaves(generatedLeaves);
  }, [count]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <FallingLeaf key={leaf.id} {...leaf} mouseX={mouseX} />
      ))}
    </div>
  );
});

export default FallingLeaves;
