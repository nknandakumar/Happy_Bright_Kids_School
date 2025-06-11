
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AdmissionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    program: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const programs = ["Daycare", "Playhome", "Nursery", "LKG", "UKG"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
Address: ${formData.address}

💬 *Message:*
${formData.message || "No additional message"}

Please contact us for admission details!
    `.trim();

    const whatsappUrl = `https://wa.me/918050342056?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Form Submitted!",
      description: "We'll contact you soon. Check WhatsApp for immediate response!",
    });

    // Reset form
    setFormData({
      childName: "",
      childAge: "",
      program: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      message: ""
    });
  };

  return (
    <section id="admission" className="py-20 bg-gradient-to-br from-nursery-pink/10 to-nursery-teal/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">
            Admission Enquiry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your child the best start? Fill out the form below and we'll get in touch with you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="shadow-xl animate-scale-in">
              <CardHeader className="bg-gradient-to-r from-nursery-pink to-nursery-teal text-white rounded-t-lg">
                <CardTitle className="text-2xl font-fredoka text-center">
                  Apply for Admission
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
                      Email Address
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
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nursery-pink focus:border-transparent transition-all"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Additional Message
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
                    className="w-full bg-gradient-to-r from-nursery-pink to-nursery-teal text-white py-4 text-lg font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Information */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-fredoka font-bold text-gray-800 mb-6">
                    🎯 Admission Process
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-nursery-pink rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Submit Application</h4>
                        <p className="text-gray-600 text-sm">Fill out the admission form with child's details</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-nursery-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">School Visit</h4>
                        <p className="text-gray-600 text-sm">Visit our campus and meet our teachers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-nursery-yellow rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Documentation</h4>
                        <p className="text-gray-600 text-sm">Complete admission formalities and documentation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-nursery-purple rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Welcome!</h4>
                        <p className="text-gray-600 text-sm">Your child's journey begins at Happy Bright Kids!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-fredoka font-bold text-gray-800 mb-6">
                    📋 Required Documents
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nursery-pink rounded-full"></div>
                      <span className="text-gray-700">Child's birth certificate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nursery-teal rounded-full"></div>
                      <span className="text-gray-700">Parent's Aadhaar Card	</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
