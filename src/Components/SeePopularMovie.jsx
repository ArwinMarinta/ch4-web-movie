import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SeePopularMovie = ({ popularMovie }) => {
  console.log(popularMovie);
  return (
    <>
      <div className="grid lg:grid-cols-4  grid-cols-3 gap-4 lg:gap-12 mb-4 px-4 sm:px-4 md:px-4 justify-center lg:mt-32 mt-16  lg:px-10 lg:mb-20">
        {popularMovie.map((movie) => (
          <div key={movie?.id} className="cursor-pointer relative">
            <div className="">
              <img
                className="h-full w-full rounded-md lg:rounded-2xlxl"
                src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
              />
              <Link
                as={Link}
                className="  hover:opacity-25 hover:bg-black hover:rounded-md lg:hover:rounded-2xl absolute top-0 h-full w-full flex justify-between items-center cursor-pointer"
                to={`/detail/${movie.id}`}
              ></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

SeePopularMovie.propTypes = {
  popularMovie: PropTypes.array,
};

export default SeePopularMovie;
