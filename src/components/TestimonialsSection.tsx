
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anita Reddy",
      role: "Mother of Arjun (LKG)",
      content: "Happy Bright Kids School has been a blessing for our family. The teachers are so caring and patient with the children. My son Arjun loves going to school every day and has learned so much in just a few months!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "Father of Sneha (UKG)",
      content: "The quality of education and care at Happy Bright Kids is exceptional. Our daughter Sneha has developed excellent social skills and academic foundation. The location in Shivamogga is perfect for us. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Preethi Shenoy",
      role: "Mother of Twins (Nursery)",
      content: "Finding a good nursery school in Shivamogga was challenging until we found Happy Bright Kids. The individual attention given to each child is remarkable. Both my twins are thriving here and love their teachers dearly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our Happy Bright Kids family about their experiences with our school in Shivamogga
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="text-nursery-pink text-4xl mb-4 font-serif">"</div>
              
              {/* Testimonial Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                {testimonial.content}
              </p>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-nursery-yellow text-xl">⭐</span>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-nursery-pink/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-fredoka font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-nursery-teal text-sm font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-nursery-pink to-nursery-teal rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-nursery-pink mb-2">98%</div>
              <div className="text-gray-600 font-semibold">Parent Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nursery-teal mb-2">150+</div>
              <div className="text-gray-600 font-semibold">Happy Children</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nursery-yellow mb-2">5+</div>
              <div className="text-gray-600 font-semibold">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nursery-purple mb-2">100%</div>
              <div className="text-gray-600 font-semibold">School Readiness</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-fredoka font-bold text-gray-800 mb-4">
            Want to Share Your Experience?
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Contact us to share your Happy Bright Kids story.
          </p>
          <button 
            className="bg-nursery-pink text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
