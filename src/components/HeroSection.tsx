import { Button } from "@/components/ui/button";

const HeroSection = () => {
	const scrollToContact = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToAdmission = () => {
		document
			.getElementById("admission")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			id="home"
			className="hero relative min-h-screen h-screen bg-gradient-to-r from-pink-50 to-yellow-50 overflow-hidden md:mt-4 flex flex-col justify-between"
		>
			{/* Main Content */}
			<div className="container mx-auto px-4 pt-20 pb-0 flex-1 flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center h-full">
					{/* Content */}
					<div className="space-y-8 animate-fade-in-up text-center max-w-3xl">
						<div className="space-y-4">
							<h1 className="text-4xl  md:text-5xl lg:text-6xl font-merriweather font-bolder text-black leading-tight">
								Welcome to <br />
								<span className=" font-poppins text-4xl  md:text-5xl lg:text-7xl  font-extrabold uppercase  text-edukids-blue">
									Happy Bright Kids 
								</span>
							</h1>

							<p className="text-lg text-gray-700 mt-4 font-poppins">
								Bright beginnings through fun and learning
							</p>

							<div className="mt-8">
								<Button
									size="lg"
									className="enroll-btn "
									onClick={scrollToAdmission}
								>
									<div><span>Enroll Now</span></div>
								</Button>
							</div>

							<div className="mt-8 text-gray-600">
								<p className="text-sm font-poppins">
									We're not just a playschool <br/> — we're a{" "}
									<span className="font-bold text-black">second home</span>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Hero Image at the very end, centered, no padding */}
			<div className=" hero-img w-full  flex justify-center items-end pb-0 mb-0">
				<img
					src="https://ik.imagekit.io/6b0su29zd/Untitled%20design%20(1).png?updatedAt=1749992548639"
					alt="Happy Bright Kids Hero"
					className=" object-cover bg-cover bg-center w-90 md:w-[600px] "
					style={{ marginBottom: 0, paddingBottom: 0 }}
				/>
			</div>
		</div>
	);
};

export default HeroSection;