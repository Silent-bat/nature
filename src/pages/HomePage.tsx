import { CarouselSection } from "@/components/sections/CarouselSection";
import { ContentSections } from "@/components/sections/ContentSections";
import HeroSection from "@/components/sections/HeroSection";

const HomePage = () => {
  return (
    // No AnimatedPage wrapper here to allow for the custom Hero->Carousel transition
    <>
      <HeroSection />
      <CarouselSection />
      <ContentSections />
    </>
  );
};

export default HomePage;
