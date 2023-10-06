// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  useEffect(() => {
    const getSearchMovie = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/3/search/movie?query=${query}&page${page}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setSearchMovie(data?.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }
        alert(error?.status_message);
      }
    };
    getSearchMovie();
  }, [query, page]);

  if (searchMovie.length === 0) {
    return (
      <div className="text-white flex justify-center items-center h-screen  md:text-lg lg:text4xl z-0">
        MOVIE NOT FOUND
      </div>
    );
  }

  return (
    <>
      <div className="text-white flex justify-center xl:mt-40 mt-16 md:text-2xl lg:text-5xl ">{`Search Result : ${query}`}</div>
      <div className="z-50 grid grid-cols-6 xl:gap-8 xl:mt-20 md:mt-8 mt-4   xl:px-32 md:px-16 md:gap-4  px-6 gap-2 mb-4 lg:mb-10 ">
        {searchMovie?.map((movie) => (
          <div key={movie?.id} className="relative cursor-pointer ">
            <img
              className="h-full w-full rounded-md lg:rounded-2xl md:rounded-lg "
              src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
            />
            <Link
              as={Link}
              className="rounded-md border-[1px] lg:rounded-2xl lg:hover:rounded-2xl hover:opacity-25 hover:bg-black hover:rounded-md absolute top-0 h-full w-full flex justify-between items-center cursor-pointer"
              to={`/detail/${movie.id}`}
            ></Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchMovie;
