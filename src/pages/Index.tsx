import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
//import WhyChooseUs from "@/components/WhyChooseUs";

import TeachersSection from "@/components/TeachersSection";
import { useRef, Suspense } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import React from "react";

const GallerySection = React.lazy(() => import("@/components/GallerySection"));
const TestimonialsSection = React.lazy(
	() => import("@/components/TestimonialsSection")
);
const AdmissionForm = React.lazy(() => import("@/components/AdmissionForm"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));
const Footer = React.lazy(() => import("@/components/Footer"));

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

	const location = useLocation();
	const navigationType = useNavigationType();

	useEffect(() => {
		if (location.hash && navigationType === "PUSH") {
			const id = location.hash.replace("#", "");
			const el = document.getElementById(id);
			if (el) {
				setTimeout(() => {
					el.scrollIntoView({ behavior: "smooth" });
				}, 100); // slight delay to ensure DOM is ready
			}
		}
	}, [location, navigationType]);

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<div ref={scrollContainerRef} className="relative">
				<HeroSection scale={scale} opacity={opacity} filter={filter} />
				{/* Sticky About + Stacking Programs */}

				<div className="relative mt-40">
					<img
						src="/clouds.svg"
						alt="clouds"
						className=" w-[800px] md:w-full"
					/>
					<div className="sticky top-0 z-10 bg-white  transition-all duration-300">
						<AboutSection />
					</div>
				</div>
			</div>
			{/**   <WhyChooseUs /> */}
			<img src="/waves.svg" alt="waves image" className="" />
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
