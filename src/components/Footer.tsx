import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	const handleWhatsAppClick = () => {
		const message =
			"Hello! I found your website and I'm interested in Happy Bright Kids School. Please provide more information.";
		const whatsappUrl = `https://wa.me/918050342056?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
			{/* Main Footer Content */}
			<div className="container mx-auto px-4 py-16">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* School Info */}
					<div className="lg:col-span-2">
						<h3 className="text-3xl font-poppins uppercase font-bold text-nursery-yellow mb-4">
							Happy Bright Kids
						</h3>
						<p className="text-gray-300 mb-6 leading-relaxed">
							Nurturing young minds in Shivamogga with quality early childhood
							education. From Daycare to UKG, we provide a safe, loving, and
							stimulating environment for your child's holistic development.
						</p>

						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<MapPin className="h-5 w-5 text-nursery-pink flex-shrink-0" />
								<span className="text-gray-300">
									Ranganatha Badavane, 4th Cross B block, Near ASS Samudaya
									Bavana, Gopala, Shivamogga, Karnataka
								</span>
							</div>

							<div className="flex items-center space-x-3">
								<Phone className="h-5 w-5 text-nursery-teal flex-shrink-0" />
								<a
									href="tel:+918050342056"
									className="text-nursery-yellow hover:text-nursery-orange transition-colors duration-300 font-semibold"
								>
									8050342056
								</a>
							</div>
						</div>

						{/* Social Actions */}
						<div className="flex space-x-4 mt-6">
							<button
								onClick={handleWhatsAppClick}
								className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
								</svg>
								<span className="font-semibold">WhatsApp</span>
							</button>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-xl font-poppins font-bold text-nursery-teal mb-6">
							Quick Links
						</h4>
						<div className="space-y-3">
							<button
								onClick={() => scrollToSection("about")}
								className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
							>
								About Us
							</button>
							<button
								onClick={() => scrollToSection("programs")}
								className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
							>
								Our Programs
							</button>
							<button
								onClick={() => scrollToSection("teachers")}
								className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
							>
								Our Teachers
							</button>
							<button
								onClick={() => scrollToSection("gallery")}
								className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
							>
								Gallery
							</button>
							<button
								onClick={() => scrollToSection("admission")}
								className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
							>
								Admissions
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
							>
								Contact Us
							</button>
						</div>
					</div>

					{/* Programs */}
					<div>
						<h4 className="text-xl font-poppins font-bold text-nursery-purple mb-6">
							Our Programs
						</h4>
						<div className="space-y-3">
							<div className="flex items-center space-x-2">
								<span className="text-nursery-pink">🍼</span>
								<span className="text-gray-300">Daycare (6m - 3y)</span>
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-nursery-teal">🎈</span>
								<span className="text-gray-300">Playhome (2 - 3y)</span>
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-nursery-yellow">🎨</span>
								<span className="text-gray-300">Nursery (3 - 4y)</span>
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-nursery-purple">📚</span>
								<span className="text-gray-300">LKG (4 - 5y)</span>
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-nursery-orange">🎓</span>
								<span className="text-gray-300">UKG (5 - 6y)</span>
							</div>
						</div>

						<div className="mt-6">
							<Button
								size="lg"
								className="enroll-btn "
								onClick={() => scrollToSection("admission")}
							>
								<div>
									<span>Enroll Now</span>
								</div>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="border-t border-gray-700">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-center md:text-left">
							<p className="text-gray-400">
								© {currentYear} Happy Bright Kids School, Shivamogga. All rights
								reserved.
							</p>
							<p className="text-gray-500 text-sm mt-1">
								Quality Early Childhood Education in Karnataka
							</p>
						</div>

						<div className="text-center md:text-right">
							<p className="text-gray-400 text-sm">
								Designed & Developed by{" "}
								<span className="text-nursery-yellow font-semibold">
									Nk Web Studio
								</span>
							</p>
							<div className="flex justify-center md:justify-end space-x-4 mt-2">
								<span className="text-xs text-gray-500">SEO Optimized</span>
								<span className="text-xs text-gray-500">Mobile Responsive</span>
								<span className="text-xs text-gray-500">Fast Loading</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Floating WhatsApp Button */}
			<button
				onClick={handleWhatsAppClick}
				className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
				title="Chat with us on WhatsApp"
			>
				<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
				</svg>
			</button>
		</footer>
	);
};

export default Footer;
