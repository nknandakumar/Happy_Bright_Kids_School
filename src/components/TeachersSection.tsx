const TeachersSection = () => {
	const teachers = [
		{
			name: "Nethra",
			role: "Head Master",
			image: "https://media.istockphoto.com/id/678420912/photo/portrait-of-an-indian-lady-teacher.jpg?s=2048x2048&w=is&k=20&c=DX5L4J6Et8RR5DCQ7LPU0vK64w_w_ERZd3T7QnHulm8=",
		},
		{
			name: "Rahul Kumar",
			role: "Math Teacher",
			image: "https://media.istockphoto.com/id/1375873615/photo/portrait-of-a-happy-woman-of-indian-ethnicity-wearing-sari-and-holding-a-book-in-hand.jpg?s=2048x2048&w=is&k=20&c=1VOzPCUPBX6tOh1LEGH2SzK3quKAbWmXBfbQnxDeHL8=",
		},
		{
			name: "Priya Sharma",
			role: "Science Teacher",
			image: "https://media.istockphoto.com/id/1329365212/photo/portrait-of-indian-teacher-standing-front-of-blackboard.jpg?s=612x612&w=0&k=20&c=k3XFIN7btGdWwkAGeSj36Vs6FUih2xEiEJ4gxF5m81I=",
		},
		{
			name: "Anil Verma",
			role: "English Teacher",
			image: "https://media.istockphoto.com/id/1331416361/photo/confident-smiling-indian-school-teacher-standing-in-front-of-the-blackboard-in-classroom.jpg?s=612x612&w=0&k=20&c=T0EewLnP4iMV7Truh6gsHrncdU3S7NtBuzWV_BSKtzE=",
		},
	];

	return (
		<section id="teachers" className="py-20 bg-gray-50 relative overflow-hidden">
			{/* SVG Background */}
			<div className="absolute inset-0 w-full h-full -z-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="100%"
					height="100%"
					preserveAspectRatio="none"
					viewBox="0 0 1440 560"
				>
					<g mask="url(#SvgjsMask1069)" fill="none">
						<rect
							width="1440"
							height="560"
							x="0"
							y="0"
							fill="rgba(194, 235, 211, 1)"
						></rect>
						<path
							d="M0,372.683C68.565,370.92,106.596,292.6,165.919,258.175C229.223,221.44,323.387,227.85,359.394,164.13C395.191,100.783,361.841,20.414,339.384,-48.796C319.703,-109.453,284.481,-162.402,238.955,-207.056C196.151,-249.041,144.883,-280.655,87.012,-296.336C29.964,-311.794,-30.107,-312.322,-86.708,-295.3C-143.072,-278.349,-191.966,-244.202,-231.458,-200.56C-271.566,-156.237,-302.065,-103.762,-313.182,-45.029C-324.612,15.356,-320.336,78.73,-294.916,134.683C-269.468,190.697,-219.371,228.21,-171.493,266.848C-118.138,309.906,-68.539,374.445,0,372.683"
							fill="#6ed096"
						></path>
						<path
							d="M1440 1056.301C1565.792 1062.001 1695.44 1190.257 1803.548 1125.692 1910.661 1061.722 1882.719 896.5930000000001 1910.913 775.059 1933.328 678.436 1964.824 584.743 1951.854 486.406 1938.781 387.288 1884.84 303.733 1837.16 215.85899999999998 1776.221 103.55000000000001 1751.753-50.837999999999965 1633.751-99.85400000000004 1516.652-148.495 1390.6-58.206999999999994 1269.745-19.836000000000013 1151.7359999999999 17.631999999999948 1004.146 19.640999999999963 934.649 122.11099999999999 865.106 224.64800000000002 910.494 363.328 926.554 486.178 938.986 581.274 991.2280000000001 660.776 1017.139 753.114 1049.2939999999999 867.701 1000.306 1024.329 1097.027 1093.6770000000001 1192.42 1162.0729999999999 1322.741 1050.988 1440 1056.301"
							fill="#ffffff"
						></path>
					</g>
					<defs>
						<mask id="SvgjsMask1069">
							<rect width="1440" height="560" fill="#ffffff"></rect>
						</mask>
					</defs>
				</svg>
			</div>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in-up">
					<p className="text-edukids-blue font-semibold mb-4 text-lg md:text-xl font-poppins">
						Meet Our Dedicated Teachers
					</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-edukids-dark mb-6 leading-tight">
						Shaping the <span className="text-edukids-blue">future</span> of
						kids
					</h2>
				</div>

				{/* Responsive Horizontal Cards */}
				<div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:pt-10 ">
					{teachers.map((teacher, index) => (
						<div
							key={index}
							className=" teacher-card rounded-3xl p-6 flex flex-col  items-start  h-auto md:h-56 justify-center gap-6 w-full"
						>
							<img
								src={teacher.image}
								alt={teacher.name}
								className="w-42 h-42 md:w-100 md:h-100  object-cover  last:rounded-br-3xl  mb-4 md:mb-0"
								loading="lazy"
							/>
							<div className="flex-1 text-left md:text-left">
								<h3 className="font-bold text-edukids-dark mb-1 text-2xl md:text-3xl">
									{teacher.name}
								</h3>
								<p className="font-sans text-edukids-gray text-lg md:text-xl font-medium">
									{teacher.role}
								</p>
							</div>
						</div>
					))}
				</div>

				
			</div>
		</section>
	);
};

export default TeachersSection;