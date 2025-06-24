import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Marquee from "@/components/magicui/marquee";

const GallerySection = () => {
	const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
	const [mediaType, setMediaType] = useState<"image" | "video">("image");

	const galleryItems = [
		{
			type: "video" as const,
			src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1749900227/feedback1_cy8qdn.mp4",
			thumbnail:
				"https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
			alt: "Introduction to Happy Bright Kids School",
		},
		{
			type: "image" as const,
			src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
			alt: "Bright and colorful classroom environment",
			title: "Our Classrooms",
		},
		{
			type: "video" as const,
			src: "https://www.w3schools.com/html/mov_bbb.mp4",
			thumbnail:
				"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
			alt: "Children learning activities",
			title: "Learning Activities",
		},
		{
			type: "image" as const,
			src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
			alt: "Outdoor play area and nature activities",
			title: "Outdoor Activities",
		},
		{
			type: "image" as const,
			src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop",
			alt: "Creative art and craft activities",
			title: "Art & Craft",
		},
		{
			type: "video" as const,
			src: "https://www.w3schools.com/html/movie.mp4",
			thumbnail:
				"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop",
			alt: "Daily activities and routines",
			title: "Daily Activities",
		},
		{
			type: "image" as const,
			src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop",
			alt: "Kids painting",
			title: "Kids Painting",
		},
		{
			type: "video" as const,
			src: "https://www.w3schools.com/html/mov_bbb.mp4",
			thumbnail:
				"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop",
			alt: "Kids playing",
			title: "Kids Playing",
		},
		{
			type: "image" as const,
			src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
			alt: "Classroom fun",
			title: "Classroom Fun",
		},
		{
			type: "image" as const,
			src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?w=600&h=400&fit=crop",
			alt: "Kids reading",
			title: "Kids Reading",
		},
		{
			type: "video" as const,
			src: "https://www.w3schools.com/html/movie.mp4",
			thumbnail:
				"https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?w=600&h=400&fit=crop",
			alt: "Kids dancing",
			title: "Kids Dancing",
		},
		{
			type: "image" as const,
			src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop",
			alt: "Kids drawing",
			title: "Kids Drawing",
		},
	];

	const videos = galleryItems.filter((item) => item.type === "video");
	const images = galleryItems.filter((item) => item.type === "image");

	const headingContainerRef = useRef(null);
	const isInView = useInView(headingContainerRef, {
		once: true,
		margin: "-100px",
	});

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

	const marqueeContainerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.35,
			},
		},
	};

	const marqueeItemVariants = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				type: "spring" as const,
				stiffness: 80,
				damping: 18,
			},
		},
	};

	// Card component for reuse
	const GalleryCard = (item: (typeof galleryItems)[0]) => (
		<div
			className="group/card relative overflow-hidden rounded-2xl shadow-xl  shadow-blue-50 transition-all duration-300 cursor-pointer w-[280px] h-[220px] md:w-[340px] md:h-[260px] lg:w-[440px] lg:h-[300px] flex-shrink-0"
			onClick={() => openMedia(item.src, item.type)}
		>
			<img
				src={item.type === "video" ? item.thumbnail : item.src}
				alt={item.alt}
				className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/card:scale-110"
				loading="lazy"
			/>
			{item.type === "video" && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/card:bg-black/30 transition-colors duration-300">
					{/* Pulse animation behind play button */}
					<span className="absolute w-12 h-12 rounded-full bg-white opacity-70 animate-ping"></span>
					<div className="w-10 h-10 bg-gradient-to-tr from-red-200 via-[#b2def6] to-yellow-100 rounded-full flex items-center justify-center shadow-lg relative z-10">
						<Play className="w-6 h-6  text-black ml-1" fill="currentColor" />
					</div>
				</div>
			)}
		</div>
	);

	const openMedia = (src: string, type: "image" | "video") => {
		setSelectedMedia(src);
		setMediaType(type);
	};

	return (
		<section id="gallery" className="py-20 bg-white ">
			<div className=" ">
				<motion.div
					ref={headingContainerRef}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-16"
				>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6"
					>
						School Gallery
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-xl text-gray-600 max-w-3xl mx-auto"
					>
						Experience our vibrant learning environment through photos and
						videos
					</motion.p>
				</motion.div>

				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={marqueeContainerVariants}
					className="flex flex-col gap-8"
				>
					{/* Videos Marquee */}
					<motion.div variants={marqueeItemVariants} className="relative">
						<Marquee pauseOnHover className="[--duration:40s]">
							{videos.map((item, i) => (
								<GalleryCard key={i} {...item} />
							))}
						</Marquee>
						<div className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-white lg:w-1/12"></div>
						<div className="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-white lg:w-1/12"></div>
					</motion.div>

					{/* Photos Marquee */}
					<motion.div variants={marqueeItemVariants} className="relative ">
						<Marquee reverse pauseOnHover className="[--duration:40s]">
							{images.map((item, i) => (
								<GalleryCard key={i} {...item} />
							))}
						</Marquee>
						<div className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-white lg:w-1/12"></div>
						<div className="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-white lg:w-1/12"></div>
					</motion.div>

					{/* Mixed Marquee */}
					<motion.div variants={marqueeItemVariants} className="relative ">
						<Marquee pauseOnHover className="[--duration:40s]">
							{galleryItems.map((item, i) => (
								<GalleryCard key={i} {...item} />
							))}
						</Marquee>
						<div className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-white lg:w-1/12"></div>
						<div className="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-white lg:w-1/12"></div>
					</motion.div>
				</motion.div>

				{/* Modal for enlarged media */}
				{selectedMedia && (
					<div
						className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
						onClick={() => setSelectedMedia(null)}
					>
						<div className="relative max-w-4xl max-h-[90vh] w-full">
							{mediaType === "video" ? (
								<iframe
									src={selectedMedia}
									className="w-full h-[70vh] rounded-lg"
									frameBorder="0"
									allow="autoplay; fullscreen; picture-in-picture"
									allowFullScreen
								/>
							) : (
								<img
									src={selectedMedia}
									alt="Enlarged gallery image"
									className="w-full h-full object-contain rounded-lg"
								/>
							)}
							<button
								className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
								onClick={() => setSelectedMedia(null)}
							>
								✕
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default GallerySection;

// Add to your global CSS (e.g., index.css):
// .custom-thin-scrollbar::-webkit-scrollbar {
//   height: 4px;
// }
// .custom-thin-scrollbar::-webkit-scrollbar-thumb {
//   background: #4DA8DA;
//   border-radius: 4px;
// }
// .custom-thin-scrollbar::-webkit-scrollbar-track {
//   background: #e5e7eb;
// }
