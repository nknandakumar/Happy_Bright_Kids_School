import { useState } from "react";
import { Play } from "lucide-react";

const GallerySection = () => {
	const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
	const [mediaType, setMediaType] = useState<"image" | "video">("image");

	const galleryItems = [
		{
			type: "video" as const,
			src: "https://player.vimeo.com/video/76979871",
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
			src: "https://player.vimeo.com/video/76979871",
			thumbnail:
				"https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
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
			src: "https://player.vimeo.com/video/76979871",
			thumbnail:
				"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
			alt: "Daily activities and routines",
			title: "Daily Activities",
		},
	];

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

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{galleryItems.map((item, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in cursor-pointer"
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
					))}
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
