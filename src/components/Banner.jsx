import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1)); 
  };

  return (
    <div className="flex justify-center mb-10 md:mb-20">
      <div className="carousel w-full h-[500px] mx-auto">
        {/* Slide 1: Movie 1 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/tKrsj24/2770842.webp" // Change to a movie-related image
            className="w-full h-full object-cover"
            alt="Movie Poster 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5 md:px-0">
            
            <h1 className="text-3xl md:text-5xl font-semibold">The Epic Adventure</h1>
            <p className="text-lg md:text-2xl mt-4">
              Join the hero on a journey to save the world in this heart-pounding action thriller.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6">
              Watch Now
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 2: Movie 2 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/RQytfbH/2409886.webp" // Change to a movie-related image
            alt="Movie Poster 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5 md:px-0">
          
            <h1 className="text-3xl md:text-5xl font-semibold">Mystery in the Shadows</h1>
            <p className="text-lg md:text-2xl mt-4">
              Unravel the dark secrets in this suspense-filled detective story.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6">
              Watch Now
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slide 3: Movie 3 */}
        <div
          className={`carousel-item relative w-full ${
            currentSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/1KnTTbw/AAAABV2u-DQKG4aq7j-Wlz-RWog-Losb7-Ilm-LHMWCv-D4-Mb7ipuz-MFrt6-Yw-Kx-V2-QJ7-Uw-Zn0-Lnmg-Kq-N4-Fw-Xj-I.jpg" // Change to a movie-related image
            alt="Movie Poster 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5 md:px-0">
          
            <h1 className="text-3xl md:text-5xl font-semibold">Love at First Sight</h1>
            <p className="text-lg md:text-2xl mt-4">
              A heartwarming romantic drama that captures the beauty of falling in love.
            </p>
            <button className="btn bg-transparent border-2 border-white text-white text-xl mt-6">
              Watch Now
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-transparent border-2 border-white text-white text-xl"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
