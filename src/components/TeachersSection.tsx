import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TeachersSection = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const teachers = [
		{
			name: "Savitha S",
			role: "Founder, Head Master",
			image:
				"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750961539/HeadMaster_mrdtb0.png",
			isFounder: true,
		},
		{
			name: "Rashmi HR",
			role: "",
			image:
				"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750961021/1750959878659_zslg8c.jpg",
			isFounder: false,
		},
		{
			name: "Nayana kumari G",
			role: "",
			image:
				"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750961146/1750960100363_uh44ds.jpg",
			isFounder: false,
		},
	];

	// Reorder for mobile: founder first, for desktop: founder in center
	const getOrderedTeachers = () => {
		// On mobile, founder first; on desktop, founder in center
		return teachers;
	};

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

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

	// New animation variants for teacher cards
	const cardContainerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.95,
			rotateX: -15,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			rotateX: 0,
		},
	};

	// Different animation for mobile (slower, more dramatic)
	const mobileCardVariants = {
		hidden: {
			opacity: 0,
			y: 80,
			scale: 0.9,
			rotateY: -10,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			rotateY: 0,
		},
	};

	return (
		<section
			id="teachers"
			className="pt-20  bg-[#F9FAFB] relative overflow-hidden"
		>
			{/* SVG Background */}

			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-20 md:mb-32"
				>
					<motion.p
						variants={itemVariants}
						className="text-edukids-blue font-semibold mb-4 text-lg md:text-xl font-poppins"
					>
						Meet Our Dedicated <span className="gradient-text">Teachers</span>
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-edukids-dark mb-6 leading-tight"
					>
						Shaping the <span className="gradient-text">future</span> of kids
					</motion.h2>
				</motion.div>

				{/* Responsive Horizontal Cards with Staggered Animation */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={cardContainerVariants}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-8 md:pt-10"
				>
					{getOrderedTeachers().map((teacher, index) => {
						// For large screens, set founder to center using order classes
						let orderClass = "";
						if (teacher.isFounder) {
							orderClass = "lg:order-2 z	 ";
						} else if (index === 1) {
							orderClass = "lg:order-1";
						} else if (index === 2) {
							orderClass = "lg:order-3";
						}

						// Calculate custom delay for staggered effect
						let customDelay = 0;
						if (teacher.isFounder) {
							customDelay = 0.5; // Center card (founder) appears first
						} else if (index === 1) {
							customDelay = 0.7; // First card appears second
						} else if (index === 2) {
							customDelay = 1.0; // Third card appears last
						}

						return (
							<motion.div
								key={index}
								className={`teacher-card bg-[#F9FAFB] rounded-3xl p-6 flex flex-col items-start md:items-center h-auto md:h-66 justify-center gap-6 w-full ${orderClass}`}
								variants={isMobile ? mobileCardVariants : cardVariants}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
								transition={{
									delay: customDelay,
									duration: isMobile ? 1.2 : 0.8,
									ease: "easeOut",
									type: "spring",
									stiffness: isMobile ? 80 : 100,
									damping: isMobile ? 20 : 15,
								}}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.2 },
								}}
							>
								<img
									src={teacher.image}
									alt={teacher.name}
									className="w-42 h-42 md:w-100 md:h-100 object-cover last:rounded-br-3xl mb-4 md:mb-0"
									loading="lazy"
								/>
								<div className="flex-1 ">
									<h3 className="font-bold font-poppins text-edukids-dark mb-1 text-2xl md:text-3xl text-left md:text-center  bg-opacity-90 px-2 py-1 rounded">
										{teacher.name}
									</h3>
									<p className="font-sans text-edukids-gray text-lg md:text-xl font-medium min-h-[1.5em] text-left md:text-center">
										{teacher.role ? teacher.role : "\u00A0"}
									</p>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
			<img src="/waves2.svg" alt="Decorative wave background" />
		</section>
	);
};

export default TeachersSection;
