import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FallingLeaves from '../FallingLeaves';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <FallingLeaves />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
