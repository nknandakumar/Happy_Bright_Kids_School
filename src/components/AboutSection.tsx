const AboutSection = () => {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="animate-fade-in-up">
						<h2 className="text-4xl md:text-5xl font-poppins font-bold text-edukids-dark mb-6">
							About Happy Bright Kids School
						</h2>
						<p className="text-lg text-edukids-gray mb-6 leading-relaxed">
							Located in Shivamogga, Karnataka, we provide exceptional early
							childhood education in a nurturing environment.
						</p>

						<div className="space-y-4 mb-8">
							<div className="flex items-start space-x-3">
								<div className="w-6 h-6 bg-edukids-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<span className="text-white text-sm">✓</span>
								</div>
								<p className="text-edukids-gray">
									<strong>Mission:</strong> Holistic development through
									play-based learning.
								</p>
							</div>

							<div className="flex items-start space-x-3">
								<div className="w-6 h-6 bg-edukids-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<span className="text-white text-sm">✓</span>
								</div>
								<p className="text-edukids-gray">
									<strong>Vision:</strong> Creating confident and curious
									learners.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="text-center p-4 bg-edukids-pink/10 rounded-xl">
								<div className="text-3xl font-bold text-edukids-pink">5+</div>
								<div className="text-sm text-edukids-gray">
									Years Experience
								</div>
							</div>
							<div className="text-center p-4 bg-edukids-teal/10 rounded-xl">
								<div className="text-3xl font-bold text-edukids-teal">4</div>
								<div className="text-sm text-edukids-gray">Expert Teachers</div>
							</div>
						</div>
					</div>

					<div
						className="relative animate-scale-in"
						style={{ animationDelay: "0.2s" }}
					>
						<img
							src="https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=600&fit=crop"
							alt="Happy children learning at our school"
							className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
							loading="lazy"
						/>

						{/* Decorative Elements */}
						<div className="absolute -top-4 -right-4 w-20 h-20 bg-edukids-yellow rounded-full opacity-20 animate-pulse"></div>
						<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-edukids-purple rounded-full opacity-20 animate-bounce"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
