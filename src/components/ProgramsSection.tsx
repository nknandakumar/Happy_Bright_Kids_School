
const ProgramsSection = () => {
  const programs = [
    {
      name: "Life Skills for Kids",
      age: "6 months - 3 years",
      description: "Safe daycare with qualified caregivers ensuring comfort and development.",
      image: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=400&h=300&fit=crop&crop=face",
      bgColor: "bg-edukids-orange/20",
      iconBg: "bg-edukids-orange",
      icon: "🍼"
    },
    {
      name: "Imagination is Power",
      age: "2 - 3 years",
      description: "Structured play and early learning in fun, engaging environment.",
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=300&fit=crop&crop=face",
      bgColor: "bg-edukids-green/20",
      iconBg: "bg-edukids-green",
      icon: "🎨"
    },
    {
      name: "Grow Your Own Wings",
      age: "3 - 4 years",
      description: "Foundation program focusing on creativity and social skills.",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop&crop=face",
      bgColor: "bg-edukids-blue/20",
      iconBg: "bg-edukids-blue",
      icon: "🌟"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-edukids-dark mb-6">
            Smart and clever kids
            <span className="block text-edukids-orange">ready to fly high!</span>
          </h2>
          <p className="text-xl text-edukids-gray max-w-2xl mx-auto">
            Learn actively with us. We teach One Smart Lesson at a time!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`${program.bgColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute top-4 right-4">
                <div className={`${program.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl`}>
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-poppins font-bold text-edukids-dark mb-4">
                  {program.name}
                </h3>
                
                <p className="text-edukids-gray mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Child Image */}
                <div className="relative mb-6">
                  <img 
                    src={program.image}
                    alt={`Child in ${program.name} program`}
                    className="w-full h-48 object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-edukids-gray">Age: {program.age}</span>
                  <button 
                    className="text-edukids-orange font-semibold hover:underline"
                    onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="bg-edukids-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-edukids-orange/90 transition-colors duration-300"
            onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enroll Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
