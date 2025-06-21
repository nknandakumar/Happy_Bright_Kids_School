import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
	const scrollToContact = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToAdmission = () => {
		document
			.getElementById("admission")
			?.scrollIntoView({ behavior: "smooth" });
	};

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
			},
		},
	};

	const welcomeVariants = {
		hidden: { opacity: 0, y: -30 },
		visible: {
			opacity: 5,
			y: 0,
			transition: {
				duration: 0.9,
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 4,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div
			id="home"
			className="hero relative min-h-screen h-screen bg-gradient-to-r from-pink-50 to-yellow-50 overflow-hidden md:mt-4 flex flex-col justify-between"
		>
			{/* Main Content */}
			<div className="container mx-auto px-4 pt-20 pb-0 flex-1 flex flex-col items-center justify-center">
				<motion.div
					className="flex flex-col items-center justify-center h-full"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Content */}
					<div className="space-y-8 text-center max-w-3xl">
						<div className="space-y-4">
							{/* Main Heading - "Welcome to" from top, "Happy Bright Kids" from bottom */}
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bolder text-black leading-tight">
								<motion.span variants={welcomeVariants} className="block">
									Welcome to
								</motion.span>
								
								<motion.span
									variants={titleVariants}
									className="font-poppins  mt-4 text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase text-edukids-blue block"
								>
									Happy Bright Kids
								</motion.span>
							</h1>

							{/* Subtitle - Fade in from bottom */}
							<motion.p
								variants={itemVariants}
								className="text-lg text-gray-700 mt-4 font-poppins"
							>
								Bright beginnings through fun and learning
							</motion.p>

							{/* Button - Scale in with bounce effect */}
							<motion.div variants={buttonVariants} className="mt-8">
								<Button
									size="lg"
									className="enroll-btn"
									onClick={scrollToAdmission}
								>
									<div>
										<span>Enroll Now</span>
									</div>
								</Button>
							</motion.div>

							{/* Bottom text - Slide up */}
							<motion.div
								variants={itemVariants}
								className="mt-8 text-gray-600"
							>
								<p className="text-sm font-poppins">
									We're not just a playschool <br /> — we're a{" "}
									<span className="font-bold text-black">second home</span>.
								</p>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
			{/* Hero Image - Slide up from bottom */}
			<motion.div
				variants={imageVariants}
				initial="hidden"
				animate="visible"
				className="hero-img w-full flex justify-center items-end pb-0 mb-0"
			>
				<img
					src="https://ik.imagekit.io/6b0su29zd/Untitled%20design%20(1).png?updatedAt=1749992548639"
					alt="Happy Bright Kids Hero"
					className="object-cover bg-cover bg-center w-90 md:w-[600px]"
					style={{ marginBottom: 0, paddingBottom: 0 }}
				/>
			</motion.div>
		</div>
	);
};

export default HeroSection;
