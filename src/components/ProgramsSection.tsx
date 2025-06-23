import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const ProgramsSection = () => {
	const programs = [
		{
			name: "Day Care",
			age: "Under 3 years",
			timing: "9:00 AM to 7:00 PM (10hr)",
			description: "",
			image:
				"https://anuchiaai.com/wp-content/uploads/2019/06/guide-to-choose-preschool-for-your-kids.jpg.webp",
			bgColor: "bg-edukids-blue",
		},
		{
			name: "Play Home",
			age: "Under 3.5 years",
			timing: "9:30 AM to 3:00 PM (5.5hr)",
			description: "",
			image:
				"https://holt-website-wpoffload.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/01/HLT9891-e1548265670524.jpeg",
			bgColor: "bg-edukids-teal",
		},
		{
			name: "Nursery",
			age: "3 - 4 years",
			timing: "9:30 AM to 4:30 PM (7hr)",
			description: "",
			image:
				"https://media.istockphoto.com/id/589961490/photo/children-playing-with-colorful-blocks-building-a-block-tower.jpg?s=2048x2048&w=is&k=20&c=WR-WMt2OSWqaZLFaPHE717z8RGHBIcjQabQYiR0mIO8=",
			bgColor: "bg-edukids-yellow",
		},
		{
			name: "LKG",
			age: "4 - 5 years",
			timing: "9:30 AM to 4:30 PM (7hr)",
			description: "",
			image:
				"https://cambridgemontessoriglobal.org/wp-content/uploads/2018/10/1.jpg",
			bgColor: "bg-edukids-blue",
		},
		{
			name: "UKG",
			age: "5 - 6 years",
			timing: "9:30 AM to 4:30 PM (7hr)",
			description: "",
			image: "https://www.bachpanglobal.com/img/Contact-mobile.webp",
			bgColor: "bg-edukids-teal",
		},
	];

	// Track which card is currently in view (mobile only)
	const [activeIndex, setActiveIndex] = useState(0);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Handler to update active card index on scroll
	useEffect(() => {
		if (window.innerWidth >= 768) return; // Only mobile
		const handleScroll = () => {
			let found = 0;
			cardRefs.current.forEach((ref, idx) => {
				if (ref) {
					const rect = ref.getBoundingClientRect();
					if (rect.top < window.innerHeight / 2) {
						found = idx;
					}
				}
			});
			setActiveIndex(found);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	// Scroll-based entrance animation
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ["start end", "center start"],
	// });
	// const fadeIn = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
	// const slideUp = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	// Card stacking style for mobile
	function getCardMotion(index: number) {
		if (index < activeIndex) {
			// Stacked behind, further back as index decreases
			const stackOffset = activeIndex - index;
			return {
				scale: 0.96 - stackOffset * 0.04,
				y: -30 * stackOffset,
				zIndex: 10 - stackOffset,
				boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
				filter: "blur(1.5px)",
			};
		} else if (index === activeIndex) {
			// Current card pops forward
			return {
				scale: 1.05,
				y: 0,
				zIndex: 20,
				boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
				filter: "blur(0px)",
			};
		} else {
			// Next cards, normal
			return {
				scale: 1,
				y: 0,
				zIndex: 1,
				boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
				filter: "blur(0px)",
			};
		}
	}

	// Simple card stacking animation for mobile
	function MobileProgramCard({
		program,
		index,
	}: {
		program: (typeof programs)[0];
		index: number;
	}) {
		const cardRef = useRef(null);
		const isInView = useInView(cardRef, { once: true, margin: "-40px" });
		return (
			<motion.div
				ref={cardRef}
				initial={{ opacity: 0, y: 40, scale: 0.95, zIndex: 5 }}
				animate={isInView ? { opacity: 1, y: 0, scale: 1, zIndex: 10 } : {}}
				transition={{
					duration: 0.6,
					delay: index * 0.07,
					type: "spring",
					stiffness: 90,
					damping: 18,
				}}
				className="sticky top-0 bg-[#F4F4F4] rounded-3xl p-6  border-b-8 border-gray-200 shadow-lg min-h-[370px] flex flex-col items-center"
				style={{ zIndex: isInView ? 10 : 5 }}
			>
				<div className="flex flex-col items-center">
					<div className="relative flex mb-6">
						<img
							src={program.image}
							alt={`Child in ${program.name} program`}
							className="w-full h-full object-contain"
							loading="lazy"
						/>
					</div>
					<div className="text-center flex flex-col space-y-4 ">
						<h3 className="text-5xl font-poppins font-bold gr-text mb-2  w-full">
							{program.name}
						</h3>
						<span className="text-xl font-semibold text-gray-700 mb-2  w-full">
							Age: {program.age}
						</span>
						<span className="text-xl font-medium text-gray-700 mb-2  w-full">
							{program.timing}
						</span>
					</div>
				</div>
			</motion.div>
		);
	}

	const gridContainerRef = useRef(null);
	const gridInView = useInView(gridContainerRef, {
		once: true,
		margin: "-100px",
	});

	const gridContainerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const gridItemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				type: "spring" as const,
				stiffness: 80,
				damping: 18,
			},
		},
	};

	return (
		<motion.section
			id="programs"
			ref={ref}
			// style={{ opacity: fadeIn, y: slideUp }}
			className="py-20 bg-[#E3E9E9] rounded-t-3xl "
		>
			<div className="container mx-auto  px-4">
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-16"
				>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6"
					>
						Our Programs
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-xl text-gray-600 max-w-2xl mx-auto"
					>
						Discover our comprehensive early education programs designed for
						your child's growth
					</motion.p>
				</motion.div>

				{/* Mobile card fade-and-slide-up effect */}
				<div className="flex relative flex-col gap-8 md:hidden">
					{programs.map((program, index) => (
						<MobileProgramCard key={index} program={program} index={index} />
					))}
				</div>

				{/* Desktop grid layout */}
				<motion.div
					ref={gridContainerRef}
					initial="hidden"
					animate={gridInView ? "visible" : "hidden"}
					variants={gridContainerVariants}
					className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative"
				>
					{programs.map((program, index) => (
						<motion.div
							key={index}
							variants={gridItemVariants}
							className="sticky top-10 flex flex-col items-center justify-start rounded-3xl p-6 overflow-visible group min-h-[370px] bg-[#F4F4F4]  border-b-8 border-gray-200 rounded-b-2xl shadow-sm"
						>
							<div className="flex flex-col pb-4  md:items-center">
								<div className="relative flex  mb-6">
									<img
										src={program.image}
										alt={`Child in ${program.name} program`}
										className="w-full h-full object-contain"
										loading="lazy"
									/>
								</div>
								<div className="text-left md:text-center flex flex-col space-y-4 ">
									<h3 className="text-5xl font-poppins font-bold gr-text mb-2  w-full">
										{program.name}
									</h3>
									<span className="text-xl font-semibold text-gray-700 mb-2  w-full">
										Age: {program.age}
									</span>
									<span className="text-xl font-medium text-gray-700 mb-2  w-full">
										{program.timing}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<div className="text-center mt-16">
					<button
						className="enroll-btn text-2xl shadow-xl"
						onClick={() =>
							document
								.getElementById("admission")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						<div>
							<span>Enroll Now →</span>
						</div>
					</button>
				</div>
			</div>
		</motion.section>
	);
};

export default ProgramsSection;
