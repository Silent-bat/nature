import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ image, title, text, imageLeft = false, linkTo }: { image: string; title: string; text: string; imageLeft?: boolean; linkTo: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // Removed once: true

  const imageVariants = {
    hidden: { opacity: 0, x: imageLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center`}>
          <motion.div
            className={`flex justify-center ${imageLeft ? 'md:order-1' : 'md:order-2'}`}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="relative w-full aspect-[4/5] max-w-sm rounded-lg overflow-hidden shadow-2xl">
              <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div
            className={`text-center md:text-left ${imageLeft ? 'md:order-2' : 'md:order-1'}`}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{title}</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">{text}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="mt-8 bg-transparent text-white border-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={linkTo}>
                  En savoir plus <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ContentSections = () => {
  return (
    <div className="bg-background relative z-30">
      <Section
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2474&auto=format&fit=crop"
        title="L'Esprit de la Forêt"
        text="Marchez sur des sentiers oubliés, respirez l'air pur et redécouvrez la sagesse des arbres centenaires. Chaque forêt est un sanctuaire de vie et de tranquillité."
        imageLeft={true}
        linkTo="/topic/foret"
      />
      <Section
        image="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2574&auto=format&fit=crop"
        title="Le Murmure de l'Océan"
        text="Écoutez le rythme des vagues et laissez-vous porter par la puissance de l'océan. Un monde de merveilles se cache sous la surface, attendant d'être exploré."
        imageLeft={false}
        linkTo="/topic/ocean"
      />
    </div>
  );
};
