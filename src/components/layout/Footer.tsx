import { Github, Twitter, Instagram, Leaf } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 text-gray-400">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-7 w-7 text-primary" />
              <span className="text-2xl font-bold font-serif text-white">Terra Nova</span>
            </NavLink>
            <p className="text-sm">Explorer la beauté sauvage du monde à travers une expérience web immersive.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/explorer" className="hover:text-white transition-colors">Explorer</NavLink></li>
              <li><NavLink to="/journal" className="hover:text-white transition-colors">Journal</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition-colors">À Propos</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Suivez-nous</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Terra Nova. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
