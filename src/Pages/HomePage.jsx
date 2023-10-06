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
          `${import.meta.env.VITE_API_URL}/3/trending/movie/day?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
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
