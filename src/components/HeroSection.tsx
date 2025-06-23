import { Button } from "@/components/ui/button";
import { motion, MotionValue } from "framer-motion";
import toy1 from "/toys1.svg";
import toy3 from "/toy3.svg";
import { SparklesText } from "./magicui/sparkles-text";

interface HeroSectionProps {
	scale: MotionValue<number>;
	opacity: MotionValue<number>;
	filter: MotionValue<string>;
}

const HeroSection = ({ scale, opacity, filter }: HeroSectionProps) => {
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
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
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

	const floatingVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				delay: 1.2,
			},
		},
	};
	const floatingVariants1 = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				delay: 1.5,
			},
		},
	};

	const floatingVariants2 = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				delay: 2.5,
			},
		},
	};

	const floatingVariants3 = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				delay: 1.8,
			},
		},
	};

	const floatingVariants4 = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				delay: 2.1,
			},
		},
	};

	return (
		<motion.div
			style={{ scale, opacity, filter }}
			className="sticky top-0 h-screen"
		>
			<div
				id="home"
				className="hero  relative min-h-screen h-screen bg-gradient-to-r from-pink-50 to-yellow-50 overflow-hidden md:mt-4 flex flex-col justify-between"
			>
				{/* Clouds - Top Left and Right */}
				<motion.div
					variants={floatingVariants}
					initial="hidden"
					animate="visible"
					transition={{ delay: 3 }}
					className="cloud-top-left animate-float-slow"
				>
					<img
						src="/cloud.svg"
						alt="Cloud"
						className="w-32 h-32 mt-16  md:w-72 md:h-72 opacity-80"
					/>
				</motion.div>

				<motion.div
					variants={floatingVariants1}
					initial="hidden"
					animate="visible"
					transition={{ delay: 2.1 }}
					className="cloud-top-right animate-float-medium"
				>
					<img
						src="/cloud.svg"
						alt="Cloud"
						className="w-28 h-28 mt-20 md:w-56 md:h-56 -hue-rotate-180 opacity-70"
					/>
				</motion.div>

				{/* Floating Toys and Books - Left Side */}

				<motion.div
					variants={floatingVariants3}
					initial="hidden"
					animate="visible"
					transition={{ delay: 2.8 }}
					className="floating-element floating-left animate-float-medium"
					style={{ top: "45%" }}
				>
					<div className="w-14 h-14 md:w-28 md:h-28   ">
						<img src={toy3} alt="toys" />
					</div>
				</motion.div>

				{/* Floating Toys and Books - Right Side */}

				<motion.div
					variants={floatingVariants4}
					initial="hidden"
					animate="visible"
					transition={{ delay: 3.2 }}
					className="floating-element floating-right animate-float-slow"
					style={{ top: "50%" }}
				>
					<div className="w-12 h-12 mt-28 md:w-20 md:h-20 ">
						<img src={toy1} alt="toys" />
					</div>
				</motion.div>

				{/* Main Content */}
				<div className="container h-[100vh] mx-auto px-4 pt-20 pb-0 flex-1 flex flex-col items-center justify-center">
					<motion.div
						className="flex flex-col items-center justify-center h-full"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{/* Content */}
						<div className="space-y-8 text-center mt-20 max-w-3xl">
							<div className="space-y-4">
								{/* Main Heading - "Welcome to" from top, "Happy Bright Kids" from bottom */}
								<h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bolder text-black leading-tight">
									<motion.span variants={welcomeVariants} className="block">
										Welcome to
									</motion.span>

									<motion.span
										variants={titleVariants}
										className="font-poppins  mt-4 text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase bg-gradient-to-tr from-red-200 via-[#4DA8DA] to-yellow-100 bg-clip-text text-transparent    block"
									>
										<SparklesText>Happy Bright Kids</SparklesText>
								
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
					transition={{ delay: 1.1 }}
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
		</motion.div>
	);
};

export default HeroSection;
