
import { Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in learning more about Happy Bright Kids School programs. Please provide more information.";
    const whatsappUrl = `https://wa.me/918050342056?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918050342056";
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our Shivamogga location or get in touch to learn more about our programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nursery-pink rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-fredoka font-bold text-gray-800 mb-2">
                      Visit Our School
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ranganatha Badavane, 4th Cross B block<br />
                      Near ASS Samudaya Bavana, Gopala<br />
                      Shivamogga, Karnataka, India
                    </p>
                    <div className="mt-4">
                      <span className="inline-block bg-nursery-teal/10 text-nursery-teal px-3 py-1 rounded-full text-sm font-semibold">
                        📍 Prime Location in Shivamogga
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nursery-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-fredoka font-bold text-gray-800 mb-4">
                      Contact Information
                    </h3>
                    
                    <div className="space-y-4">
                      <button
                        onClick={handlePhoneClick}
                        className="flex items-center space-x-3 w-full p-4 bg-nursery-pink/10 hover:bg-nursery-pink/20 rounded-lg transition-colors duration-300"
                      >
                        <span className="text-2xl">📞</span>
                        <div className="text-left">
                          <div className="font-semibold text-gray-800">Call Us</div>
                          <div className="text-nursery-pink font-bold text-lg">8050342056</div>
                        </div>
                      </button>

                      <button
                        onClick={handleWhatsAppClick}
                        className="flex items-center space-x-3 w-full p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300"
                      >
                        <span className="text-2xl">💬</span>
                        <div className="text-left">
                          <div className="font-semibold text-gray-800">WhatsApp</div>
                          <div className="text-green-600 font-bold">Chat with us instantly</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-fredoka font-bold text-gray-800 mb-4">
                  🕒 School Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-nursery-teal font-bold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-nursery-teal font-bold">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-gray-500 font-bold">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-nursery-pink to-nursery-teal p-6 text-white">
                  <h3 className="text-2xl font-fredoka font-bold mb-2">
                    Find Us on Map
                  </h3>
                  <p className="opacity-90">
                    Located in the heart of Shivamogga for easy accessibility
                  </p>
                </div>
                
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62029.03829932937!2d75.5181!3d13.9299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbaa5af5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sShivamogga%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Happy Bright Kids School Location in Shivamogga"
                  ></iframe>
                  
                  {/* Overlay with school marker */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-nursery-pink rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Happy Bright Kids School</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <button
                onClick={() => window.open('https://maps.google.com/directions?daddr=Ranganatha+Badavane+Shivamogga+Karnataka', '_blank')}
                className="bg-blue-500 text-white p-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
              >
                🗺️ Get Directions
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white p-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
              >
                💬 WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nursery-yellow to-nursery-orange rounded-2xl p-8 text-white animate-fade-in-up">
            <h3 className="text-2xl font-fredoka font-bold mb-4">
              🌟 Ready to Visit Us?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a visit to see our facilities and meet our wonderful teachers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handlePhoneClick}
                className="bg-white text-nursery-orange px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now: 8050342056
              </button>
              <button 
                onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-nursery-orange transition-all duration-300"
              >
                📝 Apply Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
