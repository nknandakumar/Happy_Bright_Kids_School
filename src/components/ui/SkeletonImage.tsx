import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({
	src,
	alt,
	className = "",
	style = {},
	...props
}) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<div
			style={{ position: "relative", width: "100%", height: "100%", ...style }}
			className={className}
		>
			{!loaded && (
				<Skeleton
					className="absolute inset-0 w-full h-full"
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
						top: 0,
						left: 0,
						zIndex: 1,
					}}
				/>
			)}
			<img
				src={src}
				alt={alt}
				onLoad={() => setLoaded(true)}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					opacity: loaded ? 1 : 0,
					transition: "opacity 0.3s",
					position: "relative",
					zIndex: 2,
				}}
				{...props}
			/>
		</div>
	);
};

export default SkeletonImage;
