
const TeachersSection = () => {
  const teachers = [
    {
      name: "Priya Sharma",
      role: "Lead Teacher & Director",
      experience: "8+ years",
      specialization: "Early Childhood Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop&crop=face",
      description: "Passionate about creating nurturing learning environments that foster creativity and confidence in young minds."
    },
    {
      name: "Kavitha Rao",
      role: "Senior Teacher",
      experience: "6+ years", 
      specialization: "Play-based Learning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Expert in designing engaging activities that make learning fun and memorable for children of all ages."
    },
    {
      name: "Sunita Nair",
      role: "Nursery Teacher",
      experience: "5+ years",
      specialization: "Language Development", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Dedicated to helping children develop strong communication skills through interactive storytelling and reading."
    },
    {
      name: "Meera Gowda",
      role: "Activity Coordinator",
      experience: "4+ years",
      specialization: "Creative Arts & Motor Skills",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face", 
      description: "Believes in the power of art and movement to enhance cognitive development and self-expression in children."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">
            Meet Our Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of qualified educators brings passion, experience, and love to nurture your child's growth every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <img 
                    src={teacher.image}
                    alt={`${teacher.name} - Teacher at Happy Bright Kids School`}
                    className="w-full h-full object-cover rounded-full border-4 border-nursery-pink/20 group-hover:border-nursery-pink/40 transition-colors duration-300"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-nursery-yellow rounded-full flex items-center justify-center">
                    <span className="text-lg">⭐</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-fredoka font-bold text-gray-800 mb-1">
                  {teacher.name}
                </h3>
                
                <div className="bg-nursery-teal text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                  {teacher.role}
                </div>
                
                <div className="text-nursery-pink font-semibold text-sm">
                  {teacher.experience} Experience
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">Specialization:</h4>
                  <p className="text-nursery-purple font-medium text-sm">{teacher.specialization}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {teacher.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-nursery-pink to-nursery-teal rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Qualifications */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
          <h3 className="text-2xl font-fredoka font-bold text-center text-gray-800 mb-8">
            Our Teachers Are Qualified In
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-semibold text-gray-700 mb-2">Education</h4>
              <p className="text-gray-600 text-sm">B.Ed, M.Ed, Child Psychology qualifications</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">💕</div>
              <h4 className="font-semibold text-gray-700 mb-2">First Aid</h4>
              <p className="text-gray-600 text-sm">Certified in child safety and emergency care</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="font-semibold text-gray-700 mb-2">Training</h4>
              <p className="text-gray-600 text-sm">Regular workshops on modern teaching methods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
