// import Testing from "../assets/testing.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Home = ({ trandingMovie, limit }) => {
  const limitedTradingMovies = trandingMovie.slice(0, limit);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? limitedTradingMovies.length - 1 : prevSlide - 1
    );
  };
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === limitedTradingMovies.length - 1 ? 0 : prevSlide + 1
    );
  };

  const autoSlide = () => {
    handleNextSlide();
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 3000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInterval, autoSlide]);

  return (
    <>
      <div className="overflow-hidden relative w-full">
        <div className="w-full h-screen flex items-center justify-center transition-transform transform translate-x">
          {limitedTradingMovies.map((movie, index) => (
            <div
              key={movie?.id}
              className={` relative w-full h-full flex-shrink-0 ${
                index === currentSlide ? "" : "hidden"
              }`}
            >
              <img
                src={`${import.meta.env.VITE_IMG_TRADING}${
                  movie.backdrop_path
                }`}
                className="w-full h-full"
                alt={movie.title}
              />
              <div className="absolute top-4 bottom-4 left-8  flex items-center  ">
                <div className="flex flex-col justify-center gap-20 ">
                  <h1 className="text-8xl w-[50%] text-red-600 font-semibold ">
                    {movie?.title}
                  </h1>
                  <p className="text-5xl w-[60%] ">{movie?.overview}</p>
                  <button className="flex px-6 py-3 w-max bg-red-600 text-3xl text-white rounded-full">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 h-full w-full flex justify-between items-center">
          <button onClick={handlePrevSlide} className="w-40 h-screen"></button>
          <button onClick={handleNextSlide} className="w-40 h-screen"></button>
        </div>
        <span className="absolute bottom-16 right-0 left-0 flex justify-center ">
          {limitedTradingMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-2  bg-gray-400 rounded-lg mx-1 ${
                currentSlide === index ? "bg-red-600" : ""
              }`}
            ></button>
          ))}
        </span>
      </div>
    </>
  );
};

Home.propTypes = {
  trandingMovie: PropTypes.array,
  limit: PropTypes.number,
};

export default Home;
