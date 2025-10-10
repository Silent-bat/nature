import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Explorer', href: '/explorer' },
  { name: 'Journal', href: '/journal' },
  { name: 'À Propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={cn(
            "relative mt-4 flex h-16 items-center justify-between rounded-full p-2 px-6 transition-all duration-300",
            scrollY.get() > 50 ? "bg-black/30 border border-white/20 backdrop-blur-xl shadow-lg" : "bg-transparent border-transparent"
          )}
        >
          <NavLink to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-serif text-white">Terra Nova</span>
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${
                    isActive ? 'text-white font-semibold' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-white hover:bg-white/20">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-0 z-50 origin-top bg-background/95 p-4 md:hidden"
          >
            <div className="flex items-center justify-between">
              <NavLink to="/" className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold font-serif text-white">Terra Nova</span>
              </NavLink>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-medium text-center ${
                      isActive ? 'text-primary' : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
