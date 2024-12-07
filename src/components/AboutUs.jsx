import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
      mirror: true,  
    });

    
    AOS.refresh();
  }, []); 


    return (
        <div className="mb-8 md:mb-20">
             <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="w-11/12 mx-auto text-center px-5 md:px-10 lg:px-14">
        {/* Section Title */}
        <h2 
        data-aos="fade-up" 
        data-aos-delay="100" 
        className="text-red-500 text-4xl font-bold mb-10 lg:mb-14">About Us</h2>

        {/* About Us Content */}
        <div className="flex flex-col lg:flex-row items-center space-x-0 justify-between lg:space-x-12 space-y-8  lg:space-y-0">
          
          {/* Text Section */}
          <div
          data-aos="fade-right" 
        data-aos-delay="100"
           className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-300 text-lg mb-4">
              Welcome to Movie Portal! We are dedicated to providing movie enthusiasts with the latest and greatest in film. Whether you're a casual viewer or a film aficionado, we have something for everyone. Explore new releases, discover hidden gems, and find all the information you need in one place.
            </p>
            <p className="text-gray-300 text-lg">
              Our mission is to bring the best movie recommendations, reviews, and ratings to your fingertips. Stay updated with the world of cinema, and make informed decisions about your next movie experience.
            </p>

            {/* Learn More Button */}
            <div className="mt-8">
              <a 
                href="#"
                className="inline-block bg-red-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
          data-aos="fade-left" 
        data-aos-delay="100"
           className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/3cdMF81/online-cinema-banner-with-open-clapper-board-film-strip-1419-2242.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-full  lg:h-[350px] object-cover border-2 border-red-500"
            />
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default AboutUs;