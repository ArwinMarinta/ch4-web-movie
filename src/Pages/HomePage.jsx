// import React from "react";
import { useEffect, useState } from "react";
import Home from "../Components/Home";
import PopulerMovie from "../Components/PupularMovie";
import PropTypes from "prop-types";
import axios from "axios";

const HomePage = ({ popularMovie }) => {
  const [trandingMovie, setTrandingMovie] = useState([]);
  useEffect(() => {
    const getTradingMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTIxNDgxNzA3N2Q4NDNjODA4NzU4NzBkOWMxMGE4YSIsInN1YiI6IjY1MTAxOTlkYTkxMTdmMDBmZWIyZWI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5qbnKjp2I6BfJrYPZeWwagLjrM4tUhpP_KAlF0QGy6I`,
            },
          }
        );
        const { data } = response;
        setTrandingMovie(data?.results);
        console.log(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }
        alert(error?.status_message);
      }
    };
    getTradingMovie();
  }, []);

  return (
    <>
      <Home trandingMovie={trandingMovie} limit={3} />
      <PopulerMovie popularMovie={popularMovie} limit={4} />
    </>
  );
};

HomePage.propTypes = {
  popularMovie: PropTypes.array,
};
export default HomePage;
