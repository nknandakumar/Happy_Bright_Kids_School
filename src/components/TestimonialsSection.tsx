import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";

const TestimonialsSection = () => {
	const [playingVideo, setPlayingVideo] = useState<string | null>(null);

	const testimonials = [
		{
			type: "video",
			name: "Anita Reddy",
			role: "Mother of Arjun (LKG)",
			content:
				"Happy Bright Kids School has been a blessing for our family. The teachers are so caring and patient with the children. My son Arjun loves going to school every day and has learned so much in just a few months!",
			rating: 5,
			image:
				"https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face",
			videoThumbnail:
				"https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=225&fit=crop",
			videoUrl:
				"https://res.cloudinary.com/dk1zdm8gz/video/upload/v1749900227/feedback1_cy8qdn.mp4",
		},
		{
			type: "video",
			name: "Rajesh Kumar",
			role: "Father of Sneha (UKG)",
			content:
				"The quality of education and care at Happy Bright Kids is exceptional. Our daughter Sneha has developed excellent social skills and academic foundation. The location in Shivamogga is perfect for us. Highly recommended!",
			rating: 5,
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
			videoThumbnail:
				"https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=225&fit=crop",
			videoUrl:
				"https://res.cloudinary.com/dk1zdm8gz/video/upload/v1749900227/feedback2_cy8qdn.mp4",
		},
		{
			type: "text",
			name: "Preethi Shenoy",
			role: "Mother of Twins (Nursery)",
			content:
				"Finding a good nursery school in Shivamogga was challenging until we found Happy Bright Kids. The individual attention given to each child is remarkable. Both my twins are thriving here and love their teachers dearly.",
			rating: 5,
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
		},
	];

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.4, 0, 0.2, 1],
			},
		},
	};

	const handleVideoClick = (videoUrl: string) => {
		setPlayingVideo(videoUrl);
	};

	return (
		<section
			id="testimonials"
			className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
		>
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-poppins font-bold text-edukids-blue mb-6">
						What Parents Say
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Hear from our Happy Bright Kids family about their experiences with
						our school
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
						>
							{testimonial.type === "video" ? (
								<>
									<div className="relative  overflow-hidden aspect-video">
										{playingVideo === testimonial.videoUrl ? (
											<video
												className="w-full h-full object-cover"
												controls
												autoPlay
												src={testimonial.videoUrl}
												onEnded={() => setPlayingVideo(null)}
											>
												Your browser does not support the video tag.
											</video>
										) : (
											<div
												className="group relative rounded-2xl cursor-pointer h-full"
												onClick={() => handleVideoClick(testimonial.videoUrl)}
											>
												<img
													src={testimonial.videoThumbnail}
													alt={`${testimonial.name}'s testimonial`}
													className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
												/>
												<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300">
													<div className="absolute inset-0 flex items-center justify-center">
														<div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
															<Play
																className="w-5 h-5 text-nursery-pink ml-1"
																fill="currentColor"
															/>
														</div>
													</div>
												</div>
											</div>
										)}
									</div>
									<div className="p-4 border-t border-gray-50">
										<h4 className="font-medium text-gray-800">
											{testimonial.name}
										</h4>
										<p className="text-sm text-gray-500">{testimonial.role}</p>
									</div>
								</>
							) : (
								<div className="p-6">
									<p className="text-gray-600 mb-4 leading-relaxed">
										{testimonial.content}
									</p>
									<div className="flex space-x-1 mb-3">
										{[...Array(testimonial.rating)].map((_, i) => (
											<span key={i} className="text-nursery-yellow text-sm">
												⭐
											</span>
										))}
									</div>
									<div className="pt-3 border-t border-gray-50">
										<h4 className="font-medium text-gray-800">
											{testimonial.name}
										</h4>
										<p className="text-sm text-gray-500">{testimonial.role}</p>
									</div>
								</div>
							)}
						</motion.div>
					))}
				</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
				>
					<div className="grid md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold text-nursery-pink mb-2">
								98%
							</div>
							<div className="text-gray-600 font-semibold">
								Parent Satisfaction
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-nursery-teal mb-2">
								60+
							</div>
							<div className="text-gray-600 font-semibold">Happy Children</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-nursery-yellow mb-2">
								2+
							</div>
							<div className="text-gray-600 font-semibold">
								Years of Excellence
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-nursery-purple mb-2">
								100%
							</div>
							<div className="text-gray-600 font-semibold">
								School Readiness
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
