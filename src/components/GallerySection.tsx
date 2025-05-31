
import { useState } from "react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
      alt: "Happy children playing at Happy Bright Kids School",
      category: "Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      alt: "Bright and colorful classroom environment",
      category: "Classrooms"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      alt: "Healthy meal time at nursery school",
      category: "Meals"
    },
    {
      src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
      alt: "Outdoor play area and nature activities", 
      category: "Outdoor"
    },
    {
      src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop",
      alt: "Creative art and craft activities",
      category: "Art & Craft"
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      alt: "Reading corner and library area",
      category: "Learning"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">
            School Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our vibrant learning environment where children explore, create, and grow together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-nursery-pink px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                    {image.category}
                  </div>
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-nursery-pink text-lg">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img 
                src={selectedImage}
                alt="Enlarged gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nursery-yellow to-nursery-orange rounded-2xl p-8 text-white animate-fade-in-up">
            <h3 className="text-2xl font-fredoka font-bold mb-4">
              📸 Want to See More?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Visit us to experience our warm and welcoming environment firsthand!
            </p>
            <button 
              className="bg-white text-nursery-orange px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
