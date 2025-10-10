import AnimatedPage from "@/components/AnimatedPage";
import { Users, Globe, Target, Heart, Compass, Recycle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Dr. Aris Thorne", role: "Fondateur & Écologiste", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { name: "Lena Petrova", role: "Photographe & Aventurière", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d" },
  { name: "Kenji Tanaka", role: "Développeur & Technologiste", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d" },
];

const AboutPage = () => {
  return (
    <AnimatedPage>
      <div className="bg-transparent text-foreground min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary">À Propos de Terra Nova</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Notre mission est de reconnecter l'humanité avec la splendeur de la nature à travers des expériences numériques immersives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center mb-24">
            <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Notre Mission</h3>
              <p className="text-gray-400">
                Inspirer l'émerveillement et encourager la conservation en révélant la beauté cachée de notre planète.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Notre Vision</h3>
              <p className="text-gray-400">
                Un futur où la technologie et la nature coexistent en harmonie, enrichissant nos vies et protégeant notre héritage commun.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Notre Équipe</h3>
              <p className="text-gray-400">
                Une équipe passionnée de designers, développeurs et amoureux de la nature dédiés à créer des expériences inoubliables.
              </p>
            </div>
          </div>

          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Passion</h4>
                <p className="text-gray-400">Nous sommes animés par un amour profond pour la nature et la technologie.</p>
              </div>
              <div className="flex flex-col items-center">
                <Compass className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Exploration</h4>
                <p className="text-gray-400">Nous croyons au pouvoir de la découverte pour élargir les horizons.</p>
              </div>
              <div className="flex flex-col items-center">
                <Recycle className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Durabilité</h4>
                <p className="text-gray-400">Nous nous engageons à promouvoir la conscience écologique dans tout ce que nous faisons.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">Rencontrez l'Équipe</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                  <p className="text-primary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
