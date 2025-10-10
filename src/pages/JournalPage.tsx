import AnimatedPage from "@/components/AnimatedPage";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Le Secret des Arbres Anciens",
    author: "Éléonore Dubois",
    date: "15 Juin, 2025",
    excerpt: "Une plongée dans la communication silencieuse des forêts et ce qu'elles peuvent nous apprendre sur la résilience et la communauté.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Chroniques des Profondeurs",
    author: "Marc-Antoine Côté",
    date: "28 Mai, 2025",
    excerpt: "Récit d'une expédition dans la Fosse des Mariannes, à la rencontre de créatures bioluminescentes et de paysages d'un autre monde.",
    image: "https://images.unsplash.com/photo-1535262412227-85541e910204?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "L'Appel des Montagnes",
    author: "Isabelle Moreau",
    date: "10 Mai, 2025",
    excerpt: "Comment l'alpinisme transforme notre perception du risque, de la peur et de nos propres limites. Une leçon d'humilité face à la grandeur.",
    image: "https://images.unsplash.com/photo-1542224562-124525008519?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Murmures du Désert",
    author: "Youssef Al-Farsi",
    date: "22 Avril, 2025",
    excerpt: "Le silence du désert n'est pas vide. Il est rempli d'histoires anciennes, portées par le vent sur des dunes de sable infinies.",
    image: "https://images.unsplash.com/photo-1487621167339-a86380d1e675?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "La Vie Secrète du Sol",
    author: "Chloé Bernard",
    date: "05 Avril, 2025",
    excerpt: "Sous nos pieds se trouve un univers complexe et vital. Explorons le réseau mycorhizien, le 'Wood Wide Web'.",
    image: "https://images.unsplash.com/photo-1593324992348-34975a45a49a?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "L'Aurore Boréale: Danse Céleste",
    author: "Anya Petrova",
    date: "18 Mars, 2025",
    excerpt: "Un voyage au-delà du cercle polaire pour assister au spectacle le plus magique de la nature, les aurores boréales.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2670&auto=format&fit=crop"
  }
];

const JournalPage = () => {
  return (
    <AnimatedPage>
      <div className="bg-transparent text-foreground min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary">Journal de Bord</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Récits, découvertes et réflexions de nos explorateurs à travers le globe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-sm border-white/10 text-white flex flex-col group overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                     <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                </CardHeader>
                <div className="p-6 flex flex-col flex-grow">
                  <CardTitle className="font-serif text-2xl leading-tight mb-2">{article.title}</CardTitle>
                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-gray-400">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-4 mt-auto">
                    <Button variant="link" className="text-primary p-0 h-auto hover:text-primary/80">
                      Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default JournalPage;
