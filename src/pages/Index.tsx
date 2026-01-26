import HeroSection from "@/components/HeroSection";
import EventsTimeline from "@/components/EventsTimeline";
import CoupleSection from "@/components/CoupleSection";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CoupleSection />
      <EventsTimeline />
      <VenueSection />
      <PhotoGallery />
      <Footer />
    </main>
  );
};

export default Index;
