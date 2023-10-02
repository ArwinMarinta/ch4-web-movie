import Arrow from "../assets/Arrow.svg";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
const PupularMovie = ({ popularMovie, limit }) => {
  const limitedMovies = popularMovie.slice(0, limit);
  return (
    <>
      <div className="w-full h-full items-center mt-[80px]  ">
        <div className="px-4 flex flex-row w-full  lg:px-10">
          <h1 className="font-bold sm:text-5xl w-full">Popular Movie</h1>
          <Link
            as={Link}
            to="/pupular-movie"
            className="w-full font-bold flex flex-row gap-1 md:text-4xl lg:gap-0 justify-end "
          >
            <p className="flex justify-center text-red-600">See All Movie</p>
            <img src={Arrow} />
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 lg:gap-16  px-4 sm:px-4 md:px-4 lg:px-10 justify-center lg:mt-24 mt-10 mb-10 lg:mb-20 ">
          {limitedMovies.map((movie) => (
            <div key={movie?.id}>
              <div>
                <img
                  className="h-full w-full rounded-3xl"
                  src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

PupularMovie.propTypes = {
  popularMovie: PropTypes.array,
  limit: PropTypes.number,
};

export default PupularMovie;
