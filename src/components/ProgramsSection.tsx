
const ProgramsSection = () => {
  const programs = [
    {
      name: "Daycare",
      age: "6 months - 3 years",
      description: "Safe and nurturing daycare services with qualified caregivers ensuring your child's comfort and development.",
      features: ["Full-day care", "Nutritious meals", "Nap time", "Basic learning activities"],
      color: "nursery-pink",
      emoji: "🍼"
    },
    {
      name: "Playhome",
      age: "2 - 3 years",
      description: "Introduction to structured play and early learning concepts in a fun, engaging environment.",
      features: ["Sensory play", "Motor skills", "Social interaction", "Creative activities"],
      color: "nursery-teal",
      emoji: "🎈"
    },
    {
      name: "Nursery",
      age: "3 - 4 years",
      description: "Foundation program focusing on basic concepts, creativity, and social skills development.",
      features: ["Letter recognition", "Number concepts", "Art & craft", "Storytelling"],
      color: "nursery-yellow",
      emoji: "🎨"
    },
    {
      name: "LKG",
      age: "4 - 5 years",
      description: "Lower Kindergarten with structured learning approach preparing children for formal education.",
      features: ["Reading readiness", "Writing skills", "Math concepts", "Science exploration"],
      color: "nursery-purple",
      emoji: "📚"
    },
    {
      name: "UKG",
      age: "5 - 6 years",
      description: "Upper Kindergarten program ensuring school readiness with comprehensive curriculum and activities.",
      features: ["Advanced literacy", "Problem solving", "Computer basics", "Leadership skills"],
      color: "nursery-orange",
      emoji: "🎓"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Age-appropriate programs designed to nurture every stage of your child's early development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-nursery-pink/30 p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.emoji}
                </div>
                <h3 className="text-2xl font-fredoka font-bold text-gray-800 mb-2">
                  {program.name}
                </h3>
                <div className={`inline-block bg-${program.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  Age: {program.age}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {program.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 text-center mb-4">Key Features:</h4>
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${program.color} rounded-full flex-shrink-0`}></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button 
                  className={`bg-${program.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-fredoka font-bold text-gray-800 mb-4">
            🌟 All Programs Include 🌟
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🍎</div>
              <div className="font-semibold text-gray-700">Healthy Meals</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🏃‍♂️</div>
              <div className="font-semibold text-gray-700">Physical Activities</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🎵</div>
              <div className="font-semibold text-gray-700">Music & Dance</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold text-gray-700">Progress Reports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
