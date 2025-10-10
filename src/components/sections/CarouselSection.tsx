import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '../ParticleBackground';
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 'foret',
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    title: "Forêts Murmurantes",
    text: "Plongez au cœur de forêts anciennes, où chaque feuille raconte une histoire.",
    particleType: null
  },
  {
    id: 'ocean',
    image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2670&auto=format&fit=crop",
    title: "Océans Infinis",
    text: "Explorez les mystères des profondeurs, un monde de couleurs et de vie.",
    particleType: 'bubbles' as const
  },
  {
    id: 'montagne',
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop",
    title: "Sommets Majestueux",
    text: "Atteignez les cimes et contemplez le monde d'un point de vue nouveau.",
    particleType: 'snow' as const
  },
  {
    id: 'desert',
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2570&auto=format&fit=crop",
    title: "Déserts Silencieux",
    text: "Découvrez la beauté austère et la résilience de la vie dans les sables dorés.",
    particleType: 'sand' as const
  }
];

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    }
  },
};

export function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = (api: CarouselApi) => {
      setCurrent(api.selectedScrollSnap());
    };

    const onScroll = (api: CarouselApi) => {
      setProgress(api.scrollProgress() * 100);
    };

    api.on("select", onSelect);
    api.on("scroll", onScroll);
    api.on("reInit", () => { onSelect(api); onScroll(api); });
    
    onSelect(api);
    onScroll(api);

    return () => {
      api.off("select", onSelect);
      api.off("scroll", onScroll);
    };
  }, [api]);

  return (
    <section id="carousel-section" className="h-[200vh] w-full relative top-[-100vh] z-20">
      <div className="sticky top-0 h-screen w-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background Images Layer */}
          {slides.map((slide, index) => (
            <div
              key={`bg-${index}`}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000"
              style={{ 
                opacity: current === index ? 1 : 0,
                zIndex: 0
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]"></div>
          
          {/* Particles Layer */}
          {slides.map((slide, index) => (
            slide.particleType && (
              <div 
                key={`particle-${index}`}
                className="absolute inset-0 z-[2]"
                style={{ display: current === index ? 'block' : 'none' }}
              >
                <ParticleBackground type={slide.particleType} isActive={current === index} />
              </div>
            )
          ))}

          {/* Carousel for Navigation Only */}
          <Carousel
            setApi={setApi}
            className="absolute inset-0 z-[3] pointer-events-none"
            opts={{ loop: true }}
            plugins={[plugin.current]}
          >
            <CarouselContent className="h-full m-0">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="h-full p-0 pointer-events-auto">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center text-white p-4 w-full">
                      <motion.h2 
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg"
                        key={`title-${index}`}
                        variants={sentenceVariants}
                        initial="hidden"
                        animate={current === index ? "visible" : "hidden"}
                      >
                        {slide.title.split("").map((char, i) => (
                          <motion.span key={`${char}-${i}`} variants={letterVariants}>
                            {char === ' ' ? '\u00A0' : char}
                          </motion.span>
                        ))}
                      </motion.h2>
                      <motion.p 
                        className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md"
                        key={`text-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
                        transition={{ duration: 0.7, delay: current === index ? 1.2 : 0, ease: 'easeOut' }}
                      >
                        {slide.text}
                      </motion.p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Progress Bar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/3 max-w-xs z-[4]">
            <Progress value={progress} className="h-1 bg-white/20 [&>*]:bg-primary" />
            <div className="flex justify-between text-xs text-white/70 mt-2">
              {slides.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => api?.scrollTo(index)} 
                  className={cn("w-full text-center transition-colors", current === index ? 'text-white font-bold' : 'hover:text-white')}
                >
                  0{index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}