const ProgramsSection = () => {
	const programs = [
		{
			name: "Day Care",
			age: "2 - 3 years",
			description:
				"",
			image:
				"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1749618961/child-children-girl-happy-removebg-preview_x2xdr6.png",
			bgColor: "bg-edukids-orange",
			svgDoodle: (
				<svg
					className="absolute top-4 left-4 w-14 h-14 opacity-40"
					viewBox="0 0 48 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 24C8 17.3726 13.3726 12 20 12C26.6274 12 32 17.3726 32 24"
						stroke="#fff"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="12" cy="28" r="2" fill="#fff" />
				</svg>
			),
		},
		{
			name: "Play Home",
			age: "3 - 4 years",
			description:
				"",
			image:
				"https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=400&fit=crop&crop=face",
			bgColor: "bg-edukids-green",
			svgDoodle: (
				<svg
					className="absolute top-4 left-4 w-16 h-10 opacity-40"
					viewBox="0 0 64 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 24C16 8 48 8 56 24"
						stroke="#fff"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
			),
		},
		{
			name: "Nursery",
			age: "3 - 4 years",
			description:
				"",
			image:
				"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop&crop=face",
			bgColor: "bg-edukids-blue",
			svgDoodle: (
				<svg
					className="absolute top-4 left-4 w-16 h-16 opacity-40"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 32C16 16 48 16 56 32"
						stroke="#fff"
						strokeWidth="3"
						strokeLinecap="round"
					/>
					<path
						d="M32 8C32 24 32 40 32 56"
						stroke="#fff"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
			),
		},
		{
			name: "LKG",
			age: "4 - 5 years",
			description:
				"",
			image:
				"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop&crop=face",
			bgColor: "bg-edukids-purple",
			svgDoodle: (
				<svg
					className="absolute top-4 left-4 w-14 h-14 opacity-40"
					viewBox="0 0 48 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 24C8 17.3726 13.3726 12 20 12C26.6274 12 32 17.3726 32 24"
						stroke="#fff"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
		{
			name: "UKG",
			age: "4 - 5 years",
			description:
				"Advanced kindergarten program preparing children for primary school with enhanced academic and social skills.",
			image:
				"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1749619277/istockphoto-1248639576-612x612-removebg-preview_kluhjs.png",
			bgColor: "bg-edukids-pink",
			svgDoodle: (
				<svg
					className="absolute top-4 left-4 w-16 h-10 opacity-40"
					viewBox="0 0 64 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 24C16 8 48 8 56 24"
						stroke="#fff"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
			),
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-4xl md:text-5xl font-poppins font-bold text-edukids-dark mb-6">
						Our Programs
					</h2>
					<p className="text-xl text-edukids-gray max-w-2xl mx-auto">
						Discover our comprehensive early education programs designed for
						your child's growth
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{programs.map((program, index) => (
						<div
							key={index}
							className={`${program.bgColor} program-card rounded-l-3xl p-0 relative overflow-hidden group animate-scale-in flex flex-col justify-end min-h-[370px] shadow-md`}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							{/* SVG Doodle */}
							{program.svgDoodle}

							{/* Large Child Image, floating */}
							<img
								src={program.image}
								alt={`Child in ${program.name} program`}
								className="absolute bottom-0 right-0 w-2/3 h-3/4 object-cover object-bottom rounded-br-3xl rounded-tl-2xl drop-shadow-xl"
								style={{ zIndex: 1 }}
								loading="lazy"
							/>

							{/* Content */}
							<div className="relative z-10 p-8 flex flex-col items-start max-w-[60%]">
								<h3 className="text-2xl font-poppins font-bold text-white mb-2 leading-tight">
									{program.name}
								</h3>
								<span className="text-base font-medium text-white/80 mb-2">
									Age: {program.age}
								</span>
								<p className="text-lg text-white mb-4 leading-snug">
									{program.description}
								</p>
								<button
									className="text-white font-semibold underline underline-offset-4 hover:text-edukids-dark transition-colors text-base"
									onClick={() =>
										document
											.getElementById("admission")
											?.scrollIntoView({ behavior: "smooth" })
									}
								>
									Learn More →
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<button
						className="bg-edukids-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-edukids-orange/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
						onClick={() =>
							document
								.getElementById("admission")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						Enroll Now →
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProgramsSection;
