import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Marquee from "@/components/magicui/marquee";

const GallerySection = () => {
	const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
	const [mediaType, setMediaType] = useState<"image" | "video">("image");

	const galleryItems = [
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750872652/school_uoibme.jpg",
		},
		{
		  type: "video" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750866968/WhatsApp_Video_2025-06-10_at_14.37.13_382906d6_vbayyc.mp4",
		  thumbnail: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750867145/video3th_yuuojw.png",
		},
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750956923/krishna_gjlnn4.webp",
		},
		{
		  type: "video" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750868340/schoolReOpen_axumwn.mp4",
		  thumbnail: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750870327/schoolReOpen_jzqv6i.png",
		},
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750954586/kidsToysThumbnail_lxf7un.jpg",
		},
		{
		  type: "video" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750954822/Teaching2_yoqmrb.mp4",
		  thumbnail: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750955007/Teaching2Thumbnail_nwmwdd.png",
		},
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750956923/fashionShow_rhyi80.webp",
		},
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750871781/gp2_sdzklx.jpg",
		},
		{
		  type: "video" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750954588/KidsToysPlaying_eoycio.mp4",
		  thumbnail: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750954586/kidsToysThumbnail_lxf7un.jpg",
		},
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750872289/teaching_airwrj.jpg",
		},
		{
		  type: "video" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750868913/WhatsApp_Video_2025-06-25_at_21.55.29_e1f9a526_ge8ycp.mp4",
		  thumbnail: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750869064/WhatsApp_Image_2025-06-25_at_22.00.43_521ce9f7_wgvemg.jpg",
		},
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750958817/girlskids_tjscit.jpg",
		},
		{
		  type: "video" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750863914/MyNameisTanya_nzdgg4.mp4",
		  thumbnail: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750864415/WhatsApp_Image_2025-06-25_at_20.43.11_bd2f328b_tuf1el.jpg",
		},
		{
		  type: "video" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750863913/happyholy_gkbq3x.mp4",
		  thumbnail: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750866856/Screenshot_2025-06-25_212319_suvyj1.png",
		},
		{
		  type: "image" as const,
		  src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750867521/groupPhoto1_jevxii.jpg",
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

					{/* More Button */}
					<div className="flex justify-center mt-8">
						<a
							href="/gallery/all"
							className="px-6 py-3 bg-gradient-to-tr from-red-100 via-[#4DA8DA] to-yellow-100 hover:bg-gradient-to-tr hover:from-yellow-200 hover:via-[#4DA8DA] hover:to-red-200 text-white rounded-lg font-semibold shadow transition-colors duration-200"
						>
							Click here for more
						</a>
					</div>
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
