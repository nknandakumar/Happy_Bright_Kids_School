
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAdmission = () => {
    document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nursery-pink via-nursery-teal to-nursery-purple">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-nursery-yellow rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-nursery-orange rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-nursery-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-nursery-teal rounded-full animate-bounce-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-fredoka font-bold text-white mb-6 leading-tight">
              Happy Bright
              <span className="block text-nursery-yellow">Kids School</span>
            </h1>
            <p className="text-2xl md:text-3xl font-fredoka font-medium text-white mb-4">
              Play & Learn
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Nurturing young minds in Shivamogga with quality education, care, and joy. 
              From Daycare to UKG, we provide a safe and loving environment for your child's growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-nursery-yellow text-gray-800 hover:bg-nursery-orange text-lg font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={scrollToAdmission}
              >
                Enroll Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-nursery-pink text-lg font-semibold px-8 py-6 rounded-full shadow-lg transition-all duration-300"
                onClick={scrollToContact}
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-semibold">📍 Shivamogga, Karnataka</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-semibold">📞 8050342056</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop&crop=faces"
                alt="Happy children at Happy Bright Kids School Shivamogga"
                className="w-full h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-bounce-gentle">
              <div className="text-2xl">🎨</div>
              <div className="text-sm font-semibold text-gray-700">Creative Learning</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-float">
              <div className="text-2xl">🌟</div>
              <div className="text-sm font-semibold text-gray-700">4 Expert Teachers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
