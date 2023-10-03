// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TrailerMovie = () => {
  const { movieId } = useParams();
  const [TrailerMovie, setTrailerMovie] = useState([]);
  const [posterMovie, setPosterMovie] = useState([]);

  //Fungsi untuk mengambil API  Video Trailer
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

  //Fungsi untuk mengambil detail pada API
  useEffect(() => {
    const getPosterMovie = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/3/movie/${movieId}?language=en-US&page=1}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setPosterMovie(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }
        alert(error?.status_message);
      }
    };
    getPosterMovie();
  }, [movieId]);

  console.log(TrailerMovie.key);
  return (
    <div className=" relative w-full h-full">
      <img
        className="w-full h-screen "
        src={`${import.meta.env.VITE_IMG_TRADING}${posterMovie.backdrop_path}`}
      />
      <iframe
        title={TrailerMovie?.name}
        className="w-full h-screen px-[800px] py-80 absolute top-0 flex items-center"
        src={`https://www.youtube.com/embed/${TrailerMovie?.key}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerMovie;
