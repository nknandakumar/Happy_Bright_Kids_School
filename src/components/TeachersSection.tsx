
const TeachersSection = () => {
  const teachers = [
    {
      name: "Letter Identification",
      subject: "Class - Pre School",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=400&fit=crop&crop=face",
      bgColor: "bg-edukids-teal/20",
      iconColor: "bg-edukids-teal",
      icon: "📝"
    },
    {
      name: "General Knowledge", 
      subject: "Fourth Grade",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      bgColor: "bg-edukids-orange/20",
      iconColor: "bg-edukids-orange",
      icon: "🌍"
    },
    {
      name: "Geography Quiz",
      subject: "First Grade", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
      bgColor: "bg-edukids-green/20",
      iconColor: "bg-edukids-green",
      icon: "🗺️"
    },
    {
      name: "Visual Arts Training",
      subject: "Sketching class",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face", 
      bgColor: "bg-edukids-yellow/20",
      iconColor: "bg-edukids-yellow",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-edukids-orange font-semibold mb-4">We focus on one impactful lesson at a time</p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-edukids-dark mb-6">
            Shaping the <span className="text-edukids-orange">future</span> of kids
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="group animate-scale-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${teacher.bgColor} rounded-3xl p-6 relative overflow-hidden h-80`}>
                {/* Icon */}
                <div className={`${teacher.iconColor} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4`}>
                  {teacher.icon}
                </div>

                {/* Child Image */}
                <div className="absolute bottom-0 right-0 w-32 h-40">
                  <img 
                    src={teacher.image}
                    alt={`${teacher.name} class`}
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-poppins font-bold text-edukids-dark mb-2 max-w-[60%]">
                    {teacher.name}
                  </h3>
                  <p className="text-edukids-gray text-sm font-medium">
                    {teacher.subject}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Left Card */}
          <div className="bg-edukids-yellow rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-poppins font-bold text-edukids-dark mb-4">
                Confidence that builds a brighter future.
              </h3>
              <p className="text-edukids-gray mb-6">
                Preparation is not just about learning the information, but developing cognitive skills and critical thinking.
              </p>
              <button className="bg-edukids-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-edukids-dark/90 transition-colors">
                Book Now →
              </button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-4xl opacity-20">✏️</div>
            <div className="absolute bottom-4 right-4 text-6xl opacity-10">📐</div>
          </div>

          {/* Right Card */}
          <div className="bg-edukids-orange rounded-3xl p-8 relative overflow-hidden text-white">
            <div className="relative z-10">
              <h3 className="text-2xl font-poppins font-bold mb-4">
                Helping kids to shoot their dreams.
              </h3>
              <p className="opacity-90 mb-6">
                Creating future leaders and innovators through quality education and guidance.
              </p>
              <button className="bg-white text-edukids-orange px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Learn More →
              </button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-4xl opacity-20">🚀</div>
            <div className="absolute bottom-4 right-4 text-6xl opacity-10">⭐</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
