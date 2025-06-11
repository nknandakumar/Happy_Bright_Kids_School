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
		<div className="hero relative min-h-screen h-screen bg-gradient-to-r from-pink-50 to-yellow-50 overflow-hidden flex flex-col justify-between">
			{/* Main Content */}
			<div className="container mx-auto px-4 pt-20 pb-0 flex-1 flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center h-full">
					{/* Content */}
					<div className="space-y-8 animate-fade-in-up text-center max-w-3xl">
						<div className="space-y-4">
							<h1 className="text-4xl  md:text-5xl lg:text-6xl font-merriweather font-bolder text-purple-800 leading-tight">
								Welcome to <br />
								<span className=" font-poppins text-4xl  md:text-5xl lg:text-7xl  font-extrabold uppercase text-edukids-orange">
									Happy Bright Kids School
								</span>
							</h1>

							<p className="text-lg text-gray-700 mt-4 font-poppins">
								Bright beginnings through fun and learning
							</p>

							<div className="mt-8">
								<Button
									size="lg"
									className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mr-4 font-poppins"
									onClick={scrollToAdmission}
								>
									Enroll Now
								</Button>
							</div>

							<div className="mt-8 text-gray-600">
								<p className="text-sm font-poppins">
									We're not just a playschool — we're a{" "}
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
					src="https://res.cloudinary.com/dk1zdm8gz/image/upload/v1749619277/istockphoto-1248639576-612x612-removebg-preview_kluhjs.png"
					alt="Happy Bright Kids Hero"
					className="max-w-xs md:max-w-md lg:max-w-lg w-auto h-auto"
					style={{ marginBottom: 0, paddingBottom: 0 }}
				/>
			</div>
		</div>
	);
};

export default HeroSection;
