// import React from "react";
import star from "../assets/start.svg";
import play from "../assets/play.svg";
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
        className=" w-full h-screen"
      />
      <div className="absolute top-4 bottom-4 left-8  flex items-center">
        <div className="flex flex-col justify-center gap-10 lg:pl-56 ">
          <div className="md:text-6xl text-red-600 font-bold text-xl">
            {detailMovie?.original_title}
          </div>
          <div className="flex flex-row gap-3 text-white lg: text-lg font-bold">
            {detailMovie?.genres?.map((gendre) => (
              <div key={gendre?.id}>
                <p>{gendre?.name}</p>
              </div>
            ))}
          </div>
          <div className="lg:text-2xl text-white w-[50%] md:font-semibold ">
            {detailMovie?.overview}
          </div>
          <div className="md:text-lg text-white flex flex-row gap-2">
            <img src={star} className="h-6" />
            <div>{detailMovie?.vote_average}</div>
          </div>
          <Link
            className="flex md:px-6 md:py-3 gap-2 px-2 py-2 w-max items-center bg-red-600 md:text-3xl text-white md:rounded-2xl rounded-xl"
            as={Link}
            to={`/trailer/${detailMovie.id}`}
          >
            <img src={play} className="h-7" />
            <p>Trailer</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
