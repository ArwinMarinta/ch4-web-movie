import SeePopulerMovie from "../Components/SeePopularMovie";
import PropTypes from "prop-types";

const AllPopularMovie = ({ popularMovie }) => {
  return (
    <>
      <SeePopulerMovie popularMovie={popularMovie} />
    </>
  );
};

AllPopularMovie.propTypes = {
  popularMovie: PropTypes.array,
};

export default AllPopularMovie;
