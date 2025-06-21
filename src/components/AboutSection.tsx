import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				duration: 0.5,
			},
		},
	};

	const headingVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
	};
	const infoVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
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

						<motion.div className="space-y-4 mb-8" variants={infoVariants}>
							<div className="flex items-start text-gray-600 space-x-3">
								<motion.div
									className="w-6 h-6 bg-edukids-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1 cursor-pointer"
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<span className="text-white text-sm">✓</span>
								</motion.div>
								<p>
									<strong>Mission:</strong> Holistic development through
									play-based learning.
								</p>
							</div>

							<div className="flex items-start  space-x-3">
								<motion.div
									className="w-6 h-6 bg-edukids-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1 cursor-pointer"
									variants={iconVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<span className="text-white text-sm">✓</span>
								</motion.div>
								<p>
									<strong>Vision:</strong> Creating confident and curious
									learners.
								</p>
							</div>
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
