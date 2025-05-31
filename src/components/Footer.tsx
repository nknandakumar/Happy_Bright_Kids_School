
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const message = "Hello! I found your website and I'm interested in Happy Bright Kids School. Please provide more information.";
    const whatsappUrl = `https://wa.me/918050342056?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-fredoka font-bold text-nursery-yellow mb-4">
              Happy Bright Kids School
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nurturing young minds in Shivamogga with quality early childhood education. 
              From Daycare to UKG, we provide a safe, loving, and stimulating environment 
              for your child's holistic development.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-nursery-pink flex-shrink-0" />
                <span className="text-gray-300">
                  Ranganatha Badavane, 4th Cross B block, Near ASS Samudaya Bavana, Gopala, Shivamogga, Karnataka
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
                <span>💬</span>
                <span className="font-semibold">WhatsApp</span>
              </button>
              
              <button
                onClick={() => window.location.href = "tel:+918050342056"}
                className="bg-nursery-pink hover:bg-nursery-pink/80 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
              >
                <span>📞</span>
                <span className="font-semibold">Call</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-fredoka font-bold text-nursery-teal mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
              >
                Our Programs
              </button>
              <button 
                onClick={() => scrollToSection('teachers')}
                className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
              >
                Our Teachers
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('admission')}
                className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
              >
                Admissions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-nursery-yellow transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-fredoka font-bold text-nursery-purple mb-6">
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
              <button
                onClick={() => scrollToSection('admission')}
                className="bg-nursery-yellow text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-nursery-orange transition-colors duration-300"
              >
                Enroll Now
              </button>
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
                © {currentYear} Happy Bright Kids School, Shivamogga. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Quality Early Childhood Education in Karnataka
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Designed & Developed by{" "}
                <span className="text-nursery-yellow font-semibold">Nk Web Studio</span>
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
        <span className="text-2xl">💬</span>
      </button>
    </footer>
  );
};

export default Footer;
