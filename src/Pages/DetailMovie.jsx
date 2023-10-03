// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailMovie = () => {
  const { movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    const getDetailMovie = async () => {
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
        setDetailMovie(data);
        console.log(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }
        alert(error?.status_message);
      }
    };
    getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <img
        src={`${import.meta.env.VITE_IMG_TRADING}${detailMovie.backdrop_path}`}
        className="w-full h-screen relative"
      />
      <div className="absolute top-4 bottom-4 left-8  flex items-center">
        <div className="flex flex-col justify-center gap-10 pl-16 ">
          <div className="text-6xl text-red-600 font-bold">
            {detailMovie?.original_title}
          </div>
          <div>{detailMovie?.genres?.name}</div>
          <div className="text-2xl text-red-600 w-[50%] font-semibold">
            {detailMovie?.overview}
          </div>
          <div className="text-lg text-red-600">
            {detailMovie?.vote_average}
          </div>
          <Link
            className="flex px-6 py-3 w-max bg-red-600 text-3xl text-white rounded-full"
            as={Link}
            to={`/trailer/${detailMovie.id}`}
          >
            Watch Trailer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
