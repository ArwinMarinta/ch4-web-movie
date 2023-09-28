import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DetailMovie from "./Pages/DetailMovie";
import SearchMovie from "./Pages/SearchMovie";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchMovie />} />
        <Route path="detail" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
