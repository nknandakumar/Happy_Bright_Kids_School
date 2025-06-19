import React from "react";

const ProgramsSection = () => {
	const programs = [
		{
			name: "Day Care",
			age: "Under 3 years",
			description: "",
			image:
				"https://anuchiaai.com/wp-content/uploads/2019/06/guide-to-choose-preschool-for-your-kids.jpg.webp",
			bgColor: "bg-edukids-blue",
		},
		{
			name: "Play Home",
			age: "Under 3.5 years",
			description: "",
			image:
				"https://holt-website-wpoffload.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/01/HLT9891-e1548265670524.jpeg",
			bgColor: "bg-edukids-teal",
		},
		{
			name: "Nursery",
			age: "3 - 4 years",
			description: "",
			image: "https://admin.ssrvm.org/uploads/learning_through_play_602ef0c40c.png",
			bgColor: "bg-edukids-yellow",
		},
		{
			name: "LKG",
			age: "4 - 5 years",
			description: "",
			image:
				"https://cambridgemontessoriglobal.org/wp-content/uploads/2018/10/1.jpg",
			bgColor: "bg-edukids-blue",
		},
		{
			name: "UKG",
			age: "5 - 6 years",
			description: "",
			image:
				"https://www.bachpanglobal.com/img/Contact-mobile.webp",
			bgColor: "bg-edukids-teal",
		},
	];

	return (
		<section id="programs" className="py-20 bg-edukids-gray">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-4xl md:text-5xl font-poppins font-bold text-edukids-blue mb-6">
						Our Programs
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Discover our comprehensive early education programs designed for
						your child's growth
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative ">
					{programs.map((program, index) => (
						<div
							key={index}
							className=" relative flex flex-col items-center justify-start rounded-3xl p-6  overflow-visible group transition-transform duration-300  animate-fade-in-up min-h-[370px] "
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="flex sticky flex-col items-center">
								<div
									className="relative flex items-center justify-center mb-6"
								
								>
									<img
										src={program.image}
										alt={`Child in ${program.name} program`}
										className="w-full h-full object-contain "
										loading="lazy"
									/>
								</div>
								<h3 className="text-3xl font-poppins font-bold text-edukids-blue mb-2 text-center w-full">
									{program.name}
								</h3>
								<span className="text-xl font-semibold text-edukids-yellow mb-2 text-center w-full">
									Age: {program.age}
								</span>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-16">
					<button
						className="enroll-btn text-2xl"
						onClick={() =>
							document
								.getElementById("admission")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						<div><span>Enroll Now →</span></div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProgramsSection;

// Add to your global CSS:
// .animate-float-slow { animation: float-slow 6s ease-in-out infinite alternate; }
// .animate-float-medium { animation: float-medium 4s ease-in-out infinite alternate; }
// @keyframes float-slow { 0% { transform: translateY(0); } 100% { transform: translateY(-24px); } }
// @keyframes float-medium { 0% { transform: translateY(0); } 100% { transform: translateY(-16px); } }