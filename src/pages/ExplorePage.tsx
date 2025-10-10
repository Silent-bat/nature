import AnimatedPage from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Waves, Trees, Sun, Wind, Flame } from "lucide-react";

const destinations = [
  {
    title: "Les Alpes Suisses",
    description: "Des sommets enneigés aux vallées verdoyantes, une aventure alpine vous attend.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "La Grande Barrière de Corail",
    description: "Plongez dans un écosystème vibrant, un kaléidoscope de vie marine.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1551293366-480751594b63?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "La Forêt Amazonienne",
    description: "Le poumon de la Terre, abritant une biodiversité d'une richesse incomparable.",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1547471080-7cc2d5d88e93?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Le Désert du Sahara",
    description: "Traversez des dunes infinies et découvrez la vie sous un soleil implacable.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1487621167339-a86380d1e675?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Les Fjords de Norvège",
    description: "Naviguez à travers des vallées glaciaires spectaculaires et des eaux profondes.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1531525645387-b14d97525eee?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Les Volcans d'Islande",
    description: "Témoin de la puissance brute de la Terre sur une île de feu et de glace.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?q=80&w=2670&auto=format&fit=crop"
  }
];

const ExplorePage = () => {
  return (
    <AnimatedPage>
      <div className="bg-transparent text-foreground min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary">Explorer le Monde</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Partez à la découverte de destinations à couper le souffle. Chaque lieu est une promesse d'aventure et d'émerveillement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-sm border-white/10 text-white overflow-hidden group flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative h-48 overflow-hidden">
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif text-2xl">
                    <dest.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    {dest.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400">{dest.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    Découvrir
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ExplorePage;
