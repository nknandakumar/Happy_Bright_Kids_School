
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAdmission = () => {
    document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-edukids-dark leading-tight">
                Putting your child's
                <span className="block text-edukids-orange">Future</span>
                <span className="block">in great motion</span>
              </h1>
              
              <div className="flex items-center space-x-8 text-sm text-edukids-gray">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-edukids-teal rounded-full"></div>
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-edukids-yellow rounded-full"></div>
                  <span>All Age Kids</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-edukids-orange rounded-full"></div>
                  <span>Easy For Teachers</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-edukids-orange hover:bg-edukids-orange/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToAdmission}
            >
              Start Learning
            </Button>

            <p className="text-edukids-gray text-lg max-w-md">
              We just don't give our students only lecture but real life experience.
            </p>

            {/* Location */}
            <div className="flex items-center space-x-2 text-edukids-gray">
              <MapPin className="h-4 w-4" />
              <span>Shivamogga, Karnataka | 📞 8050342056</span>
            </div>
          </div>

          {/* Right Content - Children Images */}
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              {/* Child 1 */}
              <div className="relative">
                <div className="bg-edukids-green/20 rounded-3xl p-6 h-80 flex items-end">
                  <img 
                    src="https://images.unsplash.com/photo-1612538498456-e861df91d4d6?w=300&h=400&fit=crop&crop=face"
                    alt="Happy child at nursery"
                    className="w-full h-full object-cover rounded-2xl"
                    loading="eager"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-2xl">🎯</div>
                </div>
              </div>

              {/* Child 2 */}
              <div className="relative mt-12">
                <div className="bg-edukids-yellow/20 rounded-3xl p-6 h-80 flex items-end">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=400&fit=crop&crop=face"
                    alt="Child learning and playing"
                    className="w-full h-full object-cover rounded-2xl"
                    loading="eager"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-2xl">🎈</div>
                </div>
              </div>
            </div>

            {/* Central Illustration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-lg animate-bounce-gentle">
              <div className="text-4xl">📚</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-edukids-dark text-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold">5+</div>
            <div className="text-sm opacity-80">Years of Excellence</div>
          </div>
          <div className="bg-edukids-yellow text-edukids-dark rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold">12K+</div>
            <div className="text-sm opacity-80">Happy Students</div>
          </div>
          <div className="bg-edukids-green text-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold">70+</div>
            <div className="text-sm opacity-80">Academic Programs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
