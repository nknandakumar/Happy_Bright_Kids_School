
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
//import WhyChooseUs from "@/components/WhyChooseUs";
import ProgramsSection from "@/components/ProgramsSection";
import TeachersSection from "@/components/TeachersSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionForm from "@/components/AdmissionForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      {/**   <WhyChooseUs /> */}
      <ProgramsSection />
      <TeachersSection />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
