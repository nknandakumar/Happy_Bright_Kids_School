
import { Check, Users, Clock, Book, Calendar } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Teachers",
      description: "4 qualified and experienced teachers dedicated to your child's development",
      color: "nursery-pink"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Timings",
      description: "Convenient daycare and school hours to fit your family schedule",
      color: "nursery-teal"
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Comprehensive Programs",
      description: "Daycare, Playhome, Nursery, LKG, and UKG programs under one roof",
      color: "nursery-yellow"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Structured Learning",
      description: "Age-appropriate curriculum that balances education with fun activities",
      color: "nursery-purple"
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Safe Environment",
      description: "Child-safe facilities with proper hygiene and safety protocols",
      color: "nursery-orange"
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Individual Attention",
      description: "Small class sizes ensuring personalized care for every child",
      color: "nursery-pink"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">
            Why Choose Happy Bright Kids?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the best early childhood education in Shivamogga with a focus on 
            holistic development, safety, and joyful learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-fredoka font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-nursery-pink to-nursery-teal rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nursery-pink to-nursery-teal rounded-2xl p-8 text-white animate-fade-in-up">
            <h3 className="text-2xl font-fredoka font-bold mb-4">
              Ready to Give Your Child the Best Start?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the Happy Bright Kids family and watch your child thrive in our nurturing environment.
            </p>
            <button 
              className="bg-white text-nursery-pink px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
