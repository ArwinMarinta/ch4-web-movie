import Arrow from "../assets/Arrow.svg";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
const PupularMovie = ({ popularMovie, limit }) => {
  const limitedMovies = popularMovie.slice(0, limit);
  return (
    <>
      <div className="w-full h-full items-center lg:mt-[80px] mt-10">
        <div className="px-4 flex flex-row w-full  lg:px-10">
          <h1 className="font-bold md:text-5xl w-full text-white">
            Popular Movie
          </h1>
          <Link
            as={Link}
            to="/pupular-movie"
            className="w-full font-bold flex flex-row gap-1 md:text-4xl justify-end items-center  lg:gap-2"
          >
            <p className="flex justify-center text-red-600">See All Movie</p>
            <img src={Arrow} className="md:h-10 md:w-10 h-5" />
          </Link>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 md:gap-8  px-6 sm:px-8 md:px-4 lg:px-10 justify-center lg:mt-24 mt-10 mb-10 lg:mb-20 ">
          {limitedMovies.map((movie) => (
            <div key={movie?.id} className="relative cursor-pointer ">
              <img
                className="h-full w-full rounded-md lg:rounded-2xl"
                src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
              />
              <Link
                as={Link}
                className=" border-[1px] rounded-2xl hover:opacity-25 hover:bg-black hover:rounded-md lg:hover:rounded-2xl absolute top-0 h-full w-full flex justify-between items-center cursor-pointer"
                to={`/detail/${movie.id}`}
              ></Link>
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
