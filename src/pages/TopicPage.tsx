import { useParams, Navigate } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = {
  foret: {
    title: "L'Esprit de la Forêt",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2474&auto=format&fit=crop",
    content: [
      "Les forêts sont les poumons de notre planète, des écosystèmes complexes et vibrants qui abritent plus de 80% de la biodiversité terrestre mondiale. Elles jouent un rôle crucial dans la régulation du climat, la purification de l'eau et la prévention de l'érosion des sols.",
      "Au-delà de leur importance écologique, les forêts ont une signification culturelle et spirituelle profonde pour de nombreuses sociétés. Le 'Shinrin-yoku', ou bain de forêt, est une pratique japonaise qui consiste à s'immerger dans l'atmosphère de la forêt pour améliorer son bien-être physique et mental.",
      "Chaque arbre est un univers en soi, connecté aux autres par un réseau souterrain de champignons appelé le mycélium. Ce 'Wood Wide Web' permet aux arbres de communiquer, de partager des nutriments et de s'avertir mutuellement des dangers. Explorer une forêt, c'est entrer dans une conversation silencieuse qui dure depuis des millénaires."
    ]
  },
  ocean: {
    title: "Le Murmure de l'Océan",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2574&auto=format&fit=crop",
    content: [
      "Couvrant plus de 70% de la surface de la Terre, l'océan est le berceau de la vie. Ses courants régulent le climat mondial et ses profondeurs abritent des mystères encore inexplorés. C'est un monde de silence assourdissant et de beauté spectaculaire.",
      "Des récifs coralliens colorés aux abysses sombres, l'océan est un royaume de contrastes. Il abrite le plus grand animal de la planète, la baleine bleue, ainsi que des milliards de micro-organismes qui forment la base de la chaîne alimentaire marine.",
      "La préservation de nos océans est l'un des plus grands défis de notre époque. La pollution plastique, la surpêche et le changement climatique menacent cet écosystème vital. En comprenant mieux l'océan, nous pouvons apprendre à mieux le protéger pour les générations futures."
    ]
  }
};

const TopicPage = () => {
  const { slug } = useParams<{ slug: keyof typeof topics }>();

  if (!slug || !topics[slug]) {
    return <Navigate to="/404" replace />;
  }

  const topic = topics[slug];

  return (
    <AnimatedPage type="zoom">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 h-[60vh] overflow-hidden">
          <motion.img 
            src={topic.image} 
            alt={topic.title} 
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 pt-[50vh] pb-24 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7 } }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{topic.title}</h1>
            <div className="prose prose-invert prose-lg max-w-3xl text-gray-300 space-y-6">
              {topic.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <motion.div className="mt-12" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="bg-transparent text-white border-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default TopicPage;
