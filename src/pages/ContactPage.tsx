import AnimatedPage from "@/components/AnimatedPage";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <AnimatedPage>
      <div className="bg-transparent text-foreground min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary">Contactez-Nous</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Une question, une suggestion ou simplement envie de dire bonjour ? Nous sommes là pour vous écouter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
            <div className="space-y-8 text-gray-300 mt-8 md:mt-0">
              <div className="p-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Nos Coordonnées</h3>
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:contact@terranova.eco" className="hover:text-primary transition-colors break-all">contact@terranova.eco</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Téléphone</h4>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Adresse</h4>
                    <p>123 Rue de la Nature, 75001 Paris, France</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Heures d'Ouverture</h3>
                <p>Lundi - Vendredi : 9h00 - 18h00</p>
                <p>Samedi : 10h00 - 16h00</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ContactPage;
