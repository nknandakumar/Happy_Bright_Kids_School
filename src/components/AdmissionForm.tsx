import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import doc from "/doc.svg"
import addmission  from "/admission.svg"

const AdmissionForm = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		childName: "",
		childAge: "",
		program: "",
		parentName: "",
		email: "",
		phone: "",
		message: "",
	});

	const programs = ["Daycare", "Playhome", "Nursery", "LKG", "UKG"];

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Create WhatsApp message
		const message = `
🌟 *Admission Enquiry - Happy Bright Kids School* 🌟

👶 *Child Details:*
Name: ${formData.childName}
Age: ${formData.childAge} years
Program: ${formData.program}

👨‍👩‍👧‍👦 *Parent Details:*
Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}

💬 *Message:*
${formData.message || "No additional message"}

Please contact us for admission details!
    `.trim();

		const whatsappUrl = `https://wa.me/918050342056?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");

		toast({
			title: "Form Submitted!",
			description:
				"We'll contact you soon. Check WhatsApp for immediate response!",
		});

		// Reset form
		setFormData({
			childName: "",
			childAge: "",
			program: "",
			parentName: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	return (
		<div
			id="admission"
			className="py-20 bg-gradient-to-br from-nursery-pink/10 to-nursery-teal/10"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-4xl md:text-5xl font-fredoka  text-edukids-blue font-bold text-edu mb-6">
						Admission Enquiry
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Ready to give your child the best start? Fill out the form below and
						we'll get in touch with you!
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						{/* Form */}
						<Card className="shadow-xl animate-scale-in">
							<CardHeader className="bg-gradient-to-r from-nursery-pink to-nursery-teal text-white rounded-t-lg">
								<CardTitle className="text-2xl text-black font-fredoka text-center">
									Enquiry
								</CardTitle>
							</CardHeader>
							<CardContent className="p-8">
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label className="block text-gray-700 font-semibold mb-2">
												Child's Name *
											</label>
											<input
												type="text"
												name="childName"
												value={formData.childName}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all"
												placeholder="Enter child's full name"
											/>
										</div>

										<div>
											<label className="block text-gray-700 font-semibold mb-2">
												Child's Age *
											</label>
											<input
												type="number"
												name="childAge"
												value={formData.childAge}
												onChange={handleChange}
												required
												min="0"
												max="10"
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all"
												placeholder="Age in years"
											/>
										</div>
									</div>

									<div>
										<label className="block text-gray-700 font-semibold mb-2">
											Program *
										</label>
										<select
											name="program"
											value={formData.program}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all"
										>
											<option value="">Select a program</option>
											{programs.map((program) => (
												<option key={program} value={program}>
													{program}
												</option>
											))}
										</select>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label className="block text-gray-700 font-semibold mb-2">
												Parent's Name *
											</label>
											<input
												type="text"
												name="parentName"
												value={formData.parentName}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all"
												placeholder="Enter parent's name"
											/>
										</div>

										<div>
											<label className="block text-gray-700 font-semibold mb-2">
												Phone Number *
											</label>
											<input
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all"
												placeholder="Enter phone number"
											/>
										</div>
									</div>

									<div>
										<label className="block text-gray-700 font-semibold mb-2">
											Email Address (Optional)
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all"
											placeholder="Enter email address"
										/>
									</div>

									<div>
										<label className="block text-gray-700 font-semibold mb-2">
											Additional Message (Optional)
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											rows={4}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all resize-none"
											placeholder="Any specific questions or requirements?"
										></textarea>
									</div>

									<Button
										type="submit"
										className="w-full bg-edukids-blue text-white py-6 text-lg font-semibold rounded-lg hover:shadow-lg hover:bg-edukids-blue transition-all duration-300 transform hover:scale-105"
									>
										Submit Application
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Information */}
						<div
							className="space-y-8 animate-fade-in-up"
							style={{ animationDelay: "0.2s" }}
						>
							<Card className="shadow-lg">
								<CardHeader className="bg-gradient-to-r from-nursery-pink to-nursery-teal text-white rounded-t-lg">
									<CardTitle className="text-2xl text-black font-fredoka text-center">
										Contact Us
									</CardTitle>
								</CardHeader>
								<CardContent className="p-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-fredoka font-bold text-gray-800 mb-4 flex items-center">
												<svg
													className="w-6 h-6 mr-2 text-gray-800"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
													/>
												</svg>
												Phone Number
											</h3>
											<p className="text-gray-600">
												Call us directly at:{" "}
												<a
													href="tel:+918050342056"
													className="text-nursery-pink font-semibold hover:underline"
												>
													+91 80503 42056
												</a>
											</p>
										</div>

										<div>
											<h3 className="text-xl font-fredoka font-bold text-gray-800 mb-4 flex items-center">
												<svg
													className="w-6 h-6 mr-2 text-gray-800"
													fill="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
												</svg>
												WhatsApp
											</h3>
											<p className="text-gray-600 mb-4">
												Send us a message on WhatsApp for quick response
											</p>
											<a
												href="https://wa.me/918050342056"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300"
											>
												<svg
													className="w-5 h-5 mr-2"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
												</svg>
												Chat on WhatsApp
											</a>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="shadow-lg ">
								<CardContent className="p-8">
									<h3 className="text-2xl flex items-center gap-2 font-fredoka font-bold text-gray-800 mb-6">
										<img src={addmission} alt="addmission process logo" className=" w-10  " /> Admission Process
									</h3>
									<div className="space-y-4">
										<div className="flex items-start space-x-3">
											<div className="w-6 h-6 bg-nursery-pink rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
												1
											</div>
											<div>
												<h4 className="font-semibold text-gray-800">
												Enquiry
												</h4>
												<p className="text-gray-600 text-sm">
													Fill out the form with child's details or Contact with Us
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-3">
											<div className="w-6 h-6 bg-nursery-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
												2
											</div>
											<div>
												<h4 className="font-semibold text-gray-800">
													School Visit
												</h4>
												<p className="text-gray-600 text-sm">
													Visit our campus and meet our teachers
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-3">
											<div className="w-6 h-6 bg-nursery-yellow rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
												3
											</div>
											<div>
												<h4 className="font-semibold text-gray-800">
													Documentation
												</h4>
												<p className="text-gray-600 text-sm">
													Complete admission formalities and documentation
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-3">
											<div className="w-6 h-6 bg-nursery-purple rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
												4
											</div>
											<div>
												<h4 className="font-semibold text-gray-800">
													Welcome!
												</h4>
												<p className="text-gray-600 text-sm">
													Your child's journey begins at Happy Bright Kids!
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="shadow-lg   ">
								<CardContent className="p-8">
									<h3 className="text-2xl flex items-start md:items-end gap-2 font-fredoka font-bold text-gray-800 mb-6">
									<img src={doc} alt="documents logo"  className="-mt-3 w-20 md:w-[40px] " />  Required Documents
									</h3>
									<div className="space-y-3">
										<div className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-nursery-pink rounded-full"></div>
											<span className="text-gray-700">
												Child's birth certificate
											</span>
										</div>
										<div className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-nursery-teal rounded-full"></div>
											<span className="text-gray-700">
												Parent's Aadhaar Card{" "}
											</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdmissionForm;
