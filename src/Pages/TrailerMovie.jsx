// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TrailerMovie = () => {
  const { movieId } = useParams();
  const [TrailerMovie, setTrailerMovie] = useState([]);

  useEffect(() => {
    const getTrailerMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );

        setTrailerMovie(response?.data?.results[0]);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }
        alert(error?.status_message);
      }
    };
    getTrailerMovie();
  }, [movieId]);
  console.log(TrailerMovie.key);
  return (
    <div className="">
      <div className="w-full h-full">
        <iframe
          title={TrailerMovie?.name}
          className="w-full h-screen px-52 py-32"
          src={`https://www.youtube.com/embed/${TrailerMovie?.key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerMovie;
