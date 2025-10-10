import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collection' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: {
      x: '100%',
      transition: {
        type: 'tween',
        ease: 'easeInOut',
      },
    },
    visible: {
      x: '0%',
      transition: {
        type: 'tween',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <NavLink to="/" className="text-2xl font-bold font-heading tracking-tight">
          Aether
        </NavLink>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground/80 ${
                  isActive ? 'text-foreground' : 'text-foreground/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Sign Up</Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 p-6 bg-background md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold font-heading">Aether</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-medium ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button className="mt-4">Sign Up</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
