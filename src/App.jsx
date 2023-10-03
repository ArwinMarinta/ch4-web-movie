import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DetailMovie from "./Pages/DetailMovie";
import SearchMovie from "./Pages/SearchMovie";
import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";
import axios from "axios";
import AllPopularMovie from "./Pages/AllPopularMovie";
import TrailerMovie from "./Pages/TrailerMovie";

function App() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        setPopularMovie(data?.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }
        alert(error?.status_message);
      }
    };
    getPopularMovie();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage popularMovie={popularMovie} />} />
        <Route path="/search" element={<SearchMovie />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
        <Route
          path="/pupular-movie"
          element={<AllPopularMovie popularMovie={popularMovie} />}
        />
        <Route path="/trailer/:movieId" element={<TrailerMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
