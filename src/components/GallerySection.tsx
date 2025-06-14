import { useRef, useState } from "react";
import { Play } from "lucide-react";

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
			title: "School Introduction Video",
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

	// Separate refs for desktop and mobile carousels
	const videosRefDesktop = useRef<HTMLDivElement>(null);
	const imagesRefDesktop = useRef<HTMLDivElement>(null);
	const allRefDesktop = useRef<HTMLDivElement>(null);
	const videosRefMobile = useRef<HTMLDivElement>(null);
	const imagesRefMobile = useRef<HTMLDivElement>(null);
	const allRefMobile = useRef<HTMLDivElement>(null);

	const scrollRow = (
		ref: React.RefObject<HTMLDivElement>,
		dir: "left" | "right"
	) => {
		if (ref.current) {
			console.log("Current ref:", ref.current);
			console.log(
				"Scroll width:",
				ref.current.scrollWidth,
				"Client width:",
				ref.current.clientWidth
			);
			const amount = dir === "left" ? -500 : 500;
			ref.current.scrollBy({ left: amount, behavior: "smooth" });
			console.log(
				"Scrolled to:",
				ref.current.scrollLeft,
				"Expected scrollBy:",
				amount
			);
		}
	};

	// Card component for reuse
	const GalleryCard = (item: (typeof galleryItems)[0], index: number) => (
		<div
			key={index}
			className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in cursor-pointer min-w-[260px] max-w-xs flex-shrink-0"
			style={{ animationDelay: `${index * 0.1}s` }}
			onClick={() => openMedia(item.src, item.type)}
		>
			<img
				src={item.type === "video" ? item.thumbnail : item.src}
				alt={item.alt}
				className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
				loading="lazy"
			/>
			{/* Video Play Button */}
			{item.type === "video" && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
					<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
						<Play
							className="w-6 h-6 text-edukids-orange ml-1"
							fill="currentColor"
						/>
					</div>
				</div>
			)}
			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<div className="absolute bottom-4 left-4 text-white">
					<div className="bg-edukids-orange px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
						{item.type === "video" ? "Video" : "Photo"}
					</div>
					<p className="text-sm font-medium">{item.title}</p>
				</div>
			</div>
		</div>
	);

	const openMedia = (src: string, type: "image" | "video") => {
		setSelectedMedia(src);
		setMediaType(type);
	};

	return (
		<section id="gallery" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-4xl md:text-5xl font-poppins font-bold text-edukids-dark mb-6">
						School Gallery
					</h2>
					<p className="text-xl text-edukids-gray max-w-3xl mx-auto">
						Experience our vibrant learning environment through photos and
						videos
					</p>
				</div>

				{/* Desktop: Three Carousels (Videos, Photos, Mixed) */}
				<div className="hidden lg:flex flex-col gap-2">
					{/* Videos Carousel */}
					<div>
						<h3 className="text-2xl font-bold mb-4 text-edukids-blue">
							Videos
						</h3>
						<div className="relative">
							<button
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(videosRefDesktop, "left")}
								aria-label="Scroll videos left"
							>
								❮
							</button>
							<div
								ref={videosRefDesktop}
								className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-edukids-blue scrollbar-track-gray-200 px-4 mb-12 custom-thin-scrollbar"
								style={{ scrollBehavior: "smooth" }}
							>
								{videos.map((item, i) => GalleryCard(item, i))}
							</div>
							<button
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(videosRefDesktop, "right")}
								aria-label="Scroll videos right"
							>
								❯
							</button>
						</div>
					</div>
					{/* Photos Carousel */}
					<div>
						<h3 className="text-2xl font-bold mb-4 text-edukids-blue">
							Photos
						</h3>
						<div className="relative">
							<button
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(imagesRefDesktop, "left")}
								aria-label="Scroll photos left"
							>
								❮
							</button>
							<div
								ref={imagesRefDesktop}
								className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-edukids-blue scrollbar-track-gray-200 px-4 mb-12 custom-thin-scrollbar"
								style={{ scrollBehavior: "smooth" }}
							>
								{images.map((item, i) => GalleryCard(item, i))}
							</div>
							<button
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(imagesRefDesktop, "right")}
								aria-label="Scroll photos right"
							>
								❯
							</button>
						</div>
					</div>
					{/* Mixed Carousel */}
					<div>
						<h3 className="text-2xl font-bold mb-4 text-edukids-blue">All</h3>
						<div className="relative">
							<button
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(allRefDesktop, "left")}
								aria-label="Scroll all left"
							>
								❮
							</button>
							<div
								ref={allRefDesktop}
								className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-edukids-blue scrollbar-track-gray-200 px-4 mb-12 custom-thin-scrollbar"
								style={{ scrollBehavior: "smooth" }}
							>
								{galleryItems.map((item, i) => GalleryCard(item, i))}
							</div>
							<button
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(allRefDesktop, "right")}
								aria-label="Scroll all right"
							>
								❯
							</button>
						</div>
					</div>
				</div>

				{/* Mobile/Tablet Carousels */}
				<div className="lg:hidden flex flex-col gap-10">
					{/* Videos Carousel */}
					<div>
						<h3 className="text-xl font-bold mb-2 text-edukids-blue">Videos</h3>
						<div className="relative">
							<button
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(videosRefMobile, "left")}
								aria-label="Scroll videos left"
							>
								❮
							</button>
							<div
								ref={videosRefMobile}
								className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-edukids-blue scrollbar-track-gray-200 px-4 mb-12 custom-thin-scrollbar"
								style={{ scrollBehavior: "smooth" }}
							>
								{videos.map((item, i) => GalleryCard(item, i))}
							</div>
							<button
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(videosRefMobile, "right")}
								aria-label="Scroll videos right"
							>
								❯
							</button>
						</div>
					</div>
					{/* Images Carousel */}
					<div>
						<h3 className="text-xl font-bold mb-2 text-edukids-blue">Photos</h3>
						<div className="relative">
							<button
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(imagesRefMobile, "left")}
								aria-label="Scroll photos left"
							>
								❮
							</button>
							<div
								ref={imagesRefMobile}
								className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-edukids-blue scrollbar-track-gray-200 px-4 mb-12 custom-thin-scrollbar"
								style={{ scrollBehavior: "smooth" }}
							>
								{images.map((item, i) => GalleryCard(item, i))}
							</div>
							<button
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(imagesRefMobile, "right")}
								aria-label="Scroll photos right"
							>
								❯
							</button>
						</div>
					</div>
					{/* Mixed Carousel */}
					<div>
						<h3 className="text-xl font-bold mb-2 text-edukids-blue">All</h3>
						<div className="relative">
							<button
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(allRefMobile, "left")}
								aria-label="Scroll all left"
							>
								❮
							</button>
							<div
								ref={allRefMobile}
								className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-edukids-blue scrollbar-track-gray-200 px-4 mb-12 custom-thin-scrollbar"
								style={{ scrollBehavior: "smooth" }}
							>
								{galleryItems.map((item, i) => GalleryCard(item, i))}
							</div>
							<button
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-edukids-blue rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-edukids-blue hover:text-white transition-colors"
								onClick={() => scrollRow(allRefMobile, "right")}
								aria-label="Scroll all right"
							>
								❯
							</button>
						</div>
					</div>
				</div>

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
