import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ProgramsSection from "@/components/ProgramsSection";
const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	// Scroll-based exit animation
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ["start end", "end start"],
	// });
	// const fadeOut = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
	// const slideUp = useTransform(scrollYProgress, [0.7, 1], [0, -80]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const headingVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	};
	const infoVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	};
	const iconVariants = {
		hover: { scale: 1.15, rotate: 10 },
		tap: { scale: 0.95, rotate: -10 },
	};
	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 40 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { duration: 1.2, delay: 0.3 },
		},
		hover: { scale: 1.03, boxShadow: "0 8px 32px 0 rgba(34, 139, 230, 0.15)" },
	};

	const listContainerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.7,
			},
		},
	};
	const listItemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.7,
				type: "spring" as const,
				stiffness: 60,
				damping: 18,
			},
		},
	};

	return (
		<div className="relative flex flex-col gap-96 ">
			<motion.section
				id="about"
				ref={ref}
				// style={{ opacity: fadeOut, y: slideUp }}
				className="bg-white sticky top-0 pb-4"
			>
				<div className="container pt-8 pb-20 mx-auto mb-20 px-2 sm:px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-center items-center overflow-visible">
						<motion.div
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							variants={containerVariants}
							className="flex flex-col items-start justify-start"
						>
							<motion.h2
								className="text-4xl md:text-5xl font-poppins font-bold text-edukids-dark mb-6"
								variants={headingVariants}
							>
								<span className="gradient-text">About</span> Happy Bright Kids
								School
							</motion.h2>
							<motion.p
								className="text-lg text-gray-600 mb-6 leading-relaxed"
								variants={infoVariants}
							>
								Located in Shivamogga, Karnataka, we provide exceptional early
								childhood education in a nurturing environment.
							</motion.p>

							{/* Why Choose Us Section */}
							<motion.div className=" w-full" variants={infoVariants}>
								<motion.h3
									className="text-2xl font-bold font-poppins text-black mb-3"
									variants={headingVariants}
								>
									Why Choose us?
								</motion.h3>
								<motion.ul
									className=" list-disc pl-6 space-y-2 text-gray-700 text-lg"
									initial="hidden"
									animate={isInView ? "visible" : "hidden"}
									variants={listContainerVariants}
								>
									{[
										"Individual Attention.",
										"Result-driven coaching.",
										"Flexible Timings.",
										"Free study materials.",
									].map((point, idx) => (
										<motion.li key={idx} variants={listItemVariants}>
											{point}
										</motion.li>
									))}
								</motion.ul>
							</motion.div>
						</motion.div>

						<motion.div
							className="relative flex justify-center items-center w-full mb-8 aspect-[4/3] overflow-visible"
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							variants={imageVariants}
							whileHover="hover"
						>
							<img
								src="https://media.istockphoto.com/id/1151224308/photo/teachers-with-children-learning-at-preschool.jpg?s=2048x2048&w=is&k=20&c=3KinZJMC0pLCQAVU9RB0Jt2mDUDAoKLq-Rqw3c6WLSE="
								alt="Happy children learning at our school"
								className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover"
								loading="lazy"
							/>
						</motion.div>
					</div>
				</div>
			</motion.section>

			<div className="sticky  top-0">
				<img
					src="/rocket.svg"
					alt="rocket image"
					className=" -mb-9 mt-40	 md:-mb-40"
				/>
				<img
					src="/wave.svg"
					alt="rocket smoke"
					className="-mt-20 md:-mt-96  "
				/>
				<ProgramsSection />
		
			</div>
		</div>
	);
};

export default AboutSection;
