// import Testing from "../assets/testing.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import play from "../assets/play.svg";

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
        <div className="w-full h-[500px]  lg:h-screen flex items-center justify-center ">
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
              <div className="absolute pl-6 xl:mx-40 lg:px-18 top-4 bottom-4 lg:left-8  flex items-center  ">
                <div className="flex flex-col justify-center lg:gap-10 xl:gap-18 xl:pl-16 gap-2 lg:pl-6">
                  <h1 className="xl:text-8xl w-[50%] text-red-600 font-semibold text-2xl lg:text-5xl ">
                    {movie?.title}
                  </h1>
                  <p className="xl:text-3xl w-[60%] text-white lg:text-xl md:text-base">
                    {movie?.overview}
                  </p>
                  <Link
                    className="cursor-pointer gap-2 px-2 items-center py-1 flex lg:px-6 lg:py-3 w-max bg-red-600 lg:text-3xl text-white rounded-xl"
                    as={Link}
                    to={`/trailer/${movie.id}`}
                  >
                    <img src={play} className="lg:h-7 h-4" />
                    <p>Trailer</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={handlePrevSlide}
            className="lg:w-40 h-full w-6 absolute top-0 left-0"
          ></button>
          <button
            onClick={handleNextSlide}
            className="lg:w-40 h-full w-6 absolute top-0 right-0 "
          ></button>
        </div>
        {/* 
        <button
          onClick={handlePrevSlide}
          className="lg:w-40 h-screen w-6 bg-red-600 "
        ></button>
        <button
          onClick={handleNextSlide}
          className="lg:w-40 h-screen w-6 bg-slate-950"
        ></button> */}

        <span className="absolute bottom-16 right-0 left-0  flex justify-center ">
          {limitedTradingMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`lg:w-8 lg:h-2 w-6 h-1 bg-gray-400 rounded-lg mx-1 ${
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
