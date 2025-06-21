import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
			image:
				"https://media.istockphoto.com/id/589961490/photo/children-playing-with-colorful-blocks-building-a-block-tower.jpg?s=2048x2048&w=is&k=20&c=WR-WMt2OSWqaZLFaPHE717z8RGHBIcjQabQYiR0mIO8=",
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
			image: "https://www.bachpanglobal.com/img/Contact-mobile.webp",
			bgColor: "bg-edukids-teal",
		},
	];

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

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

	return (
		<section id="programs" className="py-20 bg-edukids-gray">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-16"
				>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl font-poppins font-bold text-edukids-blue mb-6"
					>
						Our Programs
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-xl text-gray-600 max-w-2xl mx-auto"
					>
						Discover our comprehensive early education programs designed for
						your child's growth
					</motion.p>
				</motion.div>
				<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
					{programs.map((program, index) => (
						<div
							key={index}
							className="sticky top-10 flex flex-col items-center justify-start rounded-3xl p-6 overflow-visible group transition-transform duration-300 animate-fade-in-up min-h-[370px]"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="flex flex-col items-center bg-[#F4F4F4]">
								<div className="relative flex items-center justify-center mb-6">
									<img
										src={program.image}
										alt={`Child in ${program.name} program`}
										className="w-full h-full object-contain"
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
						<div>
							<span>Enroll Now →</span>
						</div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProgramsSection;
