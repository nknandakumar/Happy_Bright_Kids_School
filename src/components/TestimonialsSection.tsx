import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import CountUp from "./ui/CountUp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SkeletonImage from "@/components/ui/SkeletonImage";
import SwiperClass from "swiper";

const testimonials = [
	{
		name: "Pavithra ",
		role: "Mother of Maharshi dev",
		rating: 5,
		videoThumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1751042291/feedback1_laqype.png",
		videoUrl:
			"https://res.cloudinary.com/dk1zdm8gz/video/upload/v1749900227/feedback1_cy8qdn.mp4",
	},
	{
		name: "Anjali",
		role: "Mother of Artha",
		rating: 5,
		videoThumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1751042291/feedback2_rknz6m.png",
		videoUrl:
			"https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750587161/feedback2.mp4",
	},
	{
		name: "Preethi Shenoy",
		role: "Mother of Twins (Nursery)",
		rating: 4,
		videoThumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750588611/FeedbackThumbnail2_njmmet.png",
		videoUrl:
			"https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750587162/feedback3.mp4",
	},
];

const TestimonialsSection = () => {
	const [playingIndex, setPlayingIndex] = useState<number | null>(null);
	const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
	const [current, setCurrent] = useState(0);

	// Responsive slides per view
	const getSlidesPerView = () => {
		if (typeof window !== "undefined") {
			if (window.innerWidth >= 1024) return 3;
			if (window.innerWidth >= 768) return 2;
		}
		return 1;
	};
	const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
	React.useEffect(() => {
		const handleResize = () => setSlidesPerView(getSlidesPerView());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const goLeft = () => swiperRef && swiperRef.slidePrev();
	const goRight = () => swiperRef && swiperRef.slideNext();

	const onSlideChange = (swiper: { activeIndex: number }) =>
		setCurrent(swiper.activeIndex);
	const maxIndex = testimonials.length - slidesPerView;

	const headingRef = useRef(null);
	const isInView = useInView(headingRef, { once: true, margin: "-100px" });

	return (
		<section
			id="testimonials"
			className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
		>
			<div className="container mx-auto px-4">
				<div ref={headingRef} className="text-center mb-16">
					<motion.h2
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6"
					>
						What Parents Say
					</motion.h2>
					<motion.p
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto "
					>
						Hear from our Happy Bright Kids family about their experiences with
						our school
					</motion.p>
				</div>

				{/* Carousel */}
				<div className="relative flex flex-col items-center justify-center">
					<div className="w-full flex items-center justify-center">
						<button
							onClick={goLeft}
							disabled={current === 0}
							className="absolute left-0 z-10 bg-edukids-blue text-white rounded-full shadow-lg p-3 md:p-4 lg:p-5 transition-all duration-200 hover:bg-edukids-dark focus:outline-none focus:ring-2 focus:ring-edukids-blue disabled:opacity-30 disabled:cursor-not-allowed"
							aria-label="Previous"
						>
							<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
								<path
									d="M15 19l-7-7 7-7"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
						<Swiper
							onSwiper={setSwiperRef}
							onSlideChange={onSlideChange}
							slidesPerView={slidesPerView}
							spaceBetween={24}
							className="flex w-full justify-center gap-6 overflow-hidden"
							style={{ width: "100%" }}
							navigation={false}
							allowTouchMove={true}
						>
							{testimonials.map((testimonial, index) => (
								<SwiperSlide
									key={index}
									style={{ display: "flex", justifyContent: "center" }}
								>
									<div
										className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col flex-shrink-0 mx-4 w-[90vw] max-w-xs md:max-w-sm lg:max-w-md"
										style={{ minWidth: "320px", maxWidth: "400px" }}
									>
										{/* Thumbnail with 14:8 aspect ratio */}
										<div className="w-full aspect-[14/8] flex-shrink-0 relative">
											{playingIndex === index ? (
												<video
													className="w-full h-[500px] object-cover rounded-b-none"
													controls
													autoPlay
													src={testimonial.videoUrl}
													onEnded={() => setPlayingIndex(null)}
												>
													Your browser does not support the video tag.
												</video>
											) : (
												<div
													className="group relative rounded-t-2xl cursor-pointer overflow-hidden w-full h-full"
													onClick={() => setPlayingIndex(index)}
												>
													<SkeletonImage
														src={testimonial.videoThumbnail}
														alt={`${testimonial.name}'s testimonial`}
														className="w-full h-[500px] object-cover rounded-t-2xl rounded-b-none transition-transform duration-500 group-hover:scale-110"
														style={{ objectPosition: "center" }}
														width={500}
														height={500}
														loading="lazy"
													/>
													<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/card:bg-black/30 transition-colors duration-300">
														{/* Pulse animation behind play button */}
														<span className="absolute w-12 h-12 rounded-full bg-white opacity-70 animate-ping"></span>
														<div className="w-10 h-10 bg-gradient-to-tr from-red-200 via-[#b2def6] to-yellow-100 rounded-full flex items-center justify-center shadow-lg relative z-10">
															<Play
																className="w-6 h-6  text-black ml-1"
																fill="currentColor"
															/>
														</div>
													</div>
												</div>
											)}
										</div>
										{/* Card content below video */}
										<div className="flex-1 flex flex-col justify-between p-6">
											<div className="pt-3 border-t border-gray-50">
												<h4 className="font-bold font-poppins text-2xl md:text-3xl gr-text">
													{testimonial.name}
												</h4>
												<p className="text-lg md:text-xl text-gray-500 font-semibold">
													{testimonial.role}
												</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<button
							onClick={goRight}
							disabled={current >= maxIndex}
							className="absolute right-0 z-10 bg-edukids-blue text-white rounded-full shadow-lg p-3 md:p-4 lg:p-5 transition-all duration-200 hover:bg-edukids-dark focus:outline-none focus:ring-2 focus:ring-edukids-blue disabled:opacity-30 disabled:cursor-not-allowed"
							aria-label="Next"
						>
							<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
								<path
									d="M9 5l7 7-7 7"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
					{/* Custom scrollbar below carousel */}
					<div className="flex justify-center items-center mt-4 gap-2">
						{Array.from({ length: maxIndex + 1 }).map((_, idx) => (
							<button
								key={idx}
								onClick={() => swiperRef && swiperRef.slideTo(idx)}
								className={`h-2 w-8 rounded-full transition-all duration-200 ${
									current === idx
										? "bg-edukids-blue"
										: "bg-gray-300 hover:bg-edukids-blue/60"
								}`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>

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
								<CountUp
									from={0}
									to={98}
									separator=","
									direction="up"
									duration={1}
									className="count-up-text"
								/>
								%
							</div>
							<div className="text-gray-600 font-semibold">
								Parent Satisfaction
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-nursery-teal mb-2">
								<CountUp
									from={0}
									to={60}
									separator=","
									direction="up"
									duration={1.5}
									className="count-up-text"
								/>
								+
							</div>
							<div className="text-gray-600 font-semibold">Happy Children</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-nursery-yellow mb-2">
								<CountUp
									from={0}
									to={2}
									separator=","
									direction="up"
									duration={2}
									className="count-up-text"
								/>
								+
							</div>
							<div className="text-gray-600 font-semibold">
								Years of Excellence
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-nursery-purple mb-2">
								<CountUp
									from={0}
									to={100}
									separator=","
									direction="up"
									duration={1.5}
									className="count-up-text"
								/>
								%
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
