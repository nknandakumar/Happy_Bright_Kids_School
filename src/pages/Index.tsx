import Navbar from "@/components/ui/Navbar";
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
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Index = () => {
	const scrollContainerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollContainerRef,
		offset: ["start start", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
	const filter = useTransform(blur, (v) => `blur(${v}px)`);

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<div ref={scrollContainerRef} className="relative">
				<HeroSection scale={scale} opacity={opacity} filter={filter} />
				{/* Sticky About + Stacking Programs */}
				<div className="relative">
					<div className="sticky top-0 z-10 bg-white shadow-sm  transition-all duration-300">
						<AboutSection />
					</div>
					<div className="relative z-20">
						<ProgramsSection />
					</div>
				</div>
			</div>
			{/**   <WhyChooseUs /> */}

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
