import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const galleryItems = [
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750872652/school_uoibme.jpg",
		alt: "School building exterior - Happy Bright Kids School",
	},
	{
		type: "video" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750866968/WhatsApp_Video_2025-06-10_at_14.37.13_382906d6_vbayyc.mp4",
		thumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750867145/video3th_yuuojw.png",
	},
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750956923/krishna_gjlnn4.webp",
		alt: "Children performing Krishna role play at school event",
	},
	{
		type: "video" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750868340/schoolReOpen_axumwn.mp4",
		thumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750870327/schoolReOpen_jzqv6i.png",
	},
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750954586/kidsToysThumbnail_lxf7un.jpg",
		alt: "Kids playing with toys in classroom",
	},
	{
		type: "video" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750954822/Teaching2_yoqmrb.mp4",
		thumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750955007/Teaching2Thumbnail_nwmwdd.png",
	},
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750956923/fashionShow_rhyi80.webp",
		alt: "School fashion show event for kids",
	},
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750871781/gp2_sdzklx.jpg",
		alt: "Group photo of students at Happy Bright Kids School",
	},
	{
		type: "video" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750954588/KidsToysPlaying_eoycio.mp4",
		thumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750954586/kidsToysThumbnail_lxf7un.jpg",
	},
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750872289/teaching_airwrj.jpg",
		alt: "Teacher guiding students in classroom activity",
	},
	{
		type: "video" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750868913/WhatsApp_Video_2025-06-25_at_21.55.29_e1f9a526_ge8ycp.mp4",
		thumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750869064/WhatsApp_Image_2025-06-25_at_22.00.43_521ce9f7_wgvemg.jpg",
	},
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750958817/girlskids_tjscit.jpg",
		alt: "Girls group photo at school event",
	},
	{
		type: "video" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750863914/MyNameisTanya_nzdgg4.mp4",
		thumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750864415/WhatsApp_Image_2025-06-25_at_20.43.11_bd2f328b_tuf1el.jpg",
	},
	{
		type: "video" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1750863913/happyholy_gkbq3x.mp4",
		thumbnail:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750866856/Screenshot_2025-06-25_212319_suvyj1.png",
	},
	{
		type: "image" as const,
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1750867521/groupPhoto1_jevxii.jpg",
		alt: "Annual day group photo of students and teachers",
	},
];

const GalleryAll = () => {
	const navigate = useNavigate();

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7 },
		},
	};

	return (
		<div className="min-h-screen bg-white py-12 px-4 md:px-12">
			{/* Breadcrumbs and Back Button */}
			<div className="flex flex-col md:flex-row items-start md:items-center  justify-between mb-8 gap-4">
				<button
					onClick={() => navigate("/#gallery")}
					className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow transition-colors duration-200"
				>
					← Back
				</button>
			</div>
			<motion.div
				className="columns-1 sm:columns-2 md:columns-4 gap-6"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{galleryItems.map((item, idx) => (
					<motion.div
						key={idx}
						variants={cardVariants}
						className="rounded-xl shadow-lg overflow-hidden bg-gray-50 flex flex-col items-center justify-center p-2"
						style={{ minHeight: 260, minWidth: 260, maxWidth: 400 }}
					>
						{item.type === "image" ? (
							<img
								src={item.src}
								alt={item.alt}
								className="object-cover w-full h-60 rounded-lg mb-2"
								style={{ maxHeight: 240 }}
							/>
						) : (
							<video
								controls
								preload="none"
								poster={item.thumbnail}
								className="rounded-lg shadow-md"
							>
								<source src={item.src} type="video/mp4" />
							</video>
						)}
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default GalleryAll;
