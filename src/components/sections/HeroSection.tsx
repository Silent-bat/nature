import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => pos === 1 ? "relative" : "fixed");
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']); // Parallax for background

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const scrollToCarousel = () => {
    const carousel = document.querySelector('#carousel-section');
    if (carousel) {
      carousel.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={targetRef} className="relative h-[200vh] w-full">
      <motion.div 
        style={{ opacity, scale, position }}
        className="h-screen w-full top-0 left-0 flex flex-col items-center justify-center text-center text-white"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: y,
          }}
          className="absolute inset-0 z-0 animate-hero-breathing"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <motion.div
          className="relative z-20 flex flex-col items-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tight drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white animate-shimmer bg-[length:200%_auto]"
            variants={itemVariants}
          >
            Terra Nova
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-3xl text-gray-200 drop-shadow-lg"
            variants={itemVariants}
          >
            Là où la nature rencontre le futur. Une exploration immersive de notre monde.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="text-lg h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/30" onClick={scrollToCarousel}>
              Commencer l'exploration
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 z-20 cursor-pointer"
          onClick={scrollToCarousel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <ArrowDown className="h-8 w-8 text-white/70" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
