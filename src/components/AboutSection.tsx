import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

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

	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-16 justify-center" ref={ref}>
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
							<span className="text-edukids-blue">About</span> Happy Bright Kids
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
								variants={containerVariants}
							>
								{[
									"Individual Attention.",
									"Result-driven coaching.",
									"Flexible Timings.",
									"Free study materials.",
								].map((point, idx) => (
									<motion.li key={idx} variants={infoVariants}>
										{point}
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative"
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={imageVariants}
						whileHover="hover"
					>
						<img
							src="https://media.istockphoto.com/id/1151224308/photo/teachers-with-children-learning-at-preschool.jpg?s=2048x2048&w=is&k=20&c=3KinZJMC0pLCQAVU9RB0Jt2mDUDAoKLq-Rqw3c6WLSE="
							alt="Happy children learning at our school"
							className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
							loading="lazy"
						/>

						{/* Decorative Elements */}
						<div className="absolute -top-4 -right-4 w-20 h-20 bg-edukids-yellow rounded-full opacity-20 animate-pulse"></div>
						<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-edukids-purple rounded-full opacity-20 animate-bounce"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
