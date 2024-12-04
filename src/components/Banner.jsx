import { useState } from "react";

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
            src="https://i.ibb.co/7KQyVsX/movie-banner1.jpg" // Change to a movie-related image
            className="w-full h-full object-cover"
            alt="Movie Poster 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
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
            src="https://i.ibb.co/WvMHLz9/movie-banner2.jpg" // Change to a movie-related image
            alt="Movie Poster 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
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
            src="https://i.ibb.co/Xb6nQ7m/movie-banner3.jpg" // Change to a movie-related image
            alt="Movie Poster 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
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
