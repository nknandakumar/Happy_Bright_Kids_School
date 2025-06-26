import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
	const handleWhatsAppClick = () => {
		const message =
			"Hello! I'm interested in learning more about Happy Bright Kids School programs. Please provide more information.";
		const whatsappUrl = `https://wa.me/918050342056?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	const handlePhoneClick = () => {
		window.location.href = "tel:+918050342056";
	};

	const handleDirectionsClick = () => {
		const address =
			"Ranganatha Badavane, 4th Cross B block, Near ASS Samudaya Bavana, Gopala, Shivamogga, Karnataka";
		const encodedAddress = encodeURIComponent(address);
		window.open(
			`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
			"_blank"
		);
	};

	// Animation setup
	const headingRef = useRef(null);
	const isInView = useInView(headingRef, { once: true, margin: "-100px" });

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

	return (
		<section
			id="contact"
			className="py-20 bg-gradient-to-br from-gray-50 to-white"
		>
			<div className="container mx-auto px-4">
				<motion.div
					ref={headingRef}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-16"
				>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6"
					>
						Get in Touch
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-xl text-gray-600 max-w-3xl mx-auto"
					>
						Visit us at our Shivamogga location or get in touch to learn more
						about our programs
					</motion.p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Google Maps */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={containerVariants}
					>
						<motion.div variants={itemVariants}>
							<Card className="shadow-lg overflow-hidden">
								<CardHeader className="bg-gradient-to-r from-nursery-pink to-nursery-teal text-white">
									<CardTitle className="text-2xl text-black font-poppins text-center">
										Find Us on Map
									</CardTitle>
								</CardHeader>
								<CardContent className="p-0">
									<div className="relative h-[500px]">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15507.23288988313!2d75.551056!3d13.931683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU1JzU0LjEiTiA3NcKwMzMnMDMuOCJF!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
											width="100%"
											height="100%"
											style={{ border: 0 }}
											allowFullScreen
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"
											title="Happy Bright Kids School Location in Shivamogga"
										></iframe>

										{/* Overlay with school marker */}
										<div className="absolute top-4 left-4 opacity-65 bg-white rounded-lg p-3 shadow-lg">
											<div className="flex items-center space-x-2">
												<div className="w-3 h-3 bg-nursery-pink rounded-full animate-pulse"></div>
												<span className="text-sm font-semibold text-gray-800">
													Happy Bright Kids School
												</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
					{/* Contact Information */}
					<div className="space-y-12">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={containerVariants}
						>
							<motion.div variants={itemVariants}>
								<Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
									<CardHeader className="bg-gradient-to-r from-nursery-pink to-nursery-teal text-white rounded-t-lg">
										<CardTitle className="text-2xl text-black font-poppins text-center">
											Location
										</CardTitle>
									</CardHeader>
									<CardContent className="">
										<div className="flex items-start space-x-4">
											<div className="md:ml-10">
												<h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">
													Visit Our School
												</h3>
												<p className="text-gray-600 leading-relaxed">
													Ranganatha Badavane, 4th Cross B block
													<br />
													Near ASS Samudaya Bavana, Gopala
													<br />
													Shivamogga, Karnataka, India
												</p>
												<Button
													onClick={handleDirectionsClick}
													className="mt-4 bg-edukids-blue text-white hover:bg-edukids-blue/90 transition-all duration-300"
												>
													<Navigation className="w-4 h-4 mr-2" />
													Get Directions
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={containerVariants}
						>
							<motion.div variants={itemVariants}>
								<Card className="shadow-lg">
									<CardHeader className="bg-gradient-to-r from-nursery-pink to-nursery-teal text-white rounded-t-lg">
										<CardTitle className="text-2xl text-black font-poppins text-center">
											School Hours
										</CardTitle>
									</CardHeader>
									<CardContent className="">
										<div className="flex items-start space-x-4">
											<div className="flex-1">
												<div className="space-y-3  md:mx-10	 ">
													<div className="flex justify-between items-center py-2 border-b border-gray-100">
														<span className="font-semibold text-gray-700">
															Monday - Friday
														</span>
														<span className="text-nursery-teal font-bold">
															9:30 AM - 4:00 PM
														</span>
													</div>
													<div className="flex justify-between items-center py-2 border-b border-gray-100">
														<span className="font-semibold text-gray-700">
															Saturday
														</span>
														<span className="text-nursery-teal font-bold">
															9:30 AM - 1:00 PM
														</span>
													</div>
													<div className="flex justify-between items-center py-2">
														<span className="font-semibold text-gray-700">
															Sunday
														</span>
														<span className="text-gray-500 font-bold">
															Closed
														</span>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
