import { useState } from "react";
import Hambuger from "../assets/hamburger.svg";
import Search from "../assets/search2.svg";
import { Link, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

const Navbar = () => {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;

    if (searchQuery.trim() === "") {
      return;
    }

    const searchUrl = `/search?query=${searchQuery}&include_adult=false&page=1`;

    navigate(searchUrl);
  };

  // useEffect(() => {
  //   if (query.trim() !== "") {
  //     const searchURL = `/search?query=${query}&include_adult=false&page=1`;
  //     navigate(searchURL);
  //   }
  // }, [query, navigate]);

  return (
    <div className="items-center absolute w-full top-0 left-0 right-0 z-40 bg-transparent  ">
      <div className="flex mx-auto px-4 justify-between  py-2 items-center lg:px-10">
        <div className="text-red-600 font-bold lg:text-6xl text-2xl w-[40%]">
          Movielist
        </div>
        <div className="flex flex-row gap-2 items-center  lg:w-full lg:justify-between ">
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setOpenSearch(openSearch ? false : true)}
          >
            <img src={Search} className="w-6 h-6" />
          </div>
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setOpenHamburger(openHamburger ? false : true)}
          >
            <img src={Hambuger} className="h-6 w-6" />
          </div>
          <div className="hidden lg:block py-2 w-[60%] ">
            <form
              onSubmit={handleSearch}
              className=" flex flex-row h-14 rounded-2xl border-2 border-red-600 self-center hover:border-[3px] "
            >
              <img src={Search} className="py-2 ml-2" />
              <input
                // value={query}
                // onChange={handleChange}
                type="text"
                name="search"
                placeholder=" Search You Movie"
                className="ml-4 placeholder-gray-50 bg-transparent border-spacing-0 w-full text-xl active:border-none focus:outline-none text-white"
              />
            </form>
          </div>
          <div className="hidden lg:block">
            <Link
              as={Link}
              to={`/`}
              className="text-white text-xl mr-4 hover:text-red-600"
            >
              HOME
            </Link>
            <Link className="inline-flex px-5 py-3 rounded-xl border-2 border-red-600 font-bold text-xl  text-red-600 ml-4 hover:bg-white">
              Login
            </Link>
            <Link className="inline-flex px-5 py-3 rounded-xl  bg-red-600 font-bold text-xl  text-white ml-4">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className={`${openSearch ? "block" : "hidden"} lg:hidden`}>
        <div className="w-full flex justify-center items-center px-4">
          <form className="flex flex-row  h-10 rounded-xl border-2 border-red-600 mb-4 w-full bg-red">
            <img src={Search} className="py-2 ml-2" />
            <input
              value={query}
              onChange={handleChange}
              placeholder="  Search You Movie"
              name="search"
              className="ml-2 placeholder-white text-white bg-transparent rounded-r-xl w-full active:border-none focus:outline-none border-0"
              type="text"
            />
          </form>
        </div>
      </div>
      <div className={`${openHamburger ? "block" : "hidden"} lg:hidden`}>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link className="inline-flex px-4 py-2 rounded-xl border-2 border-red-600 font-bold text-base  text-red-600 ml-4">
            Login
          </Link>
          <Link className="inline-flex px-4 py-2 rounded-xl  bg-red-600 font-bold text-base  text-white ml-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  // changeWord: PropTypes.func,
  // query: PropTypes.string,
};
export default Navbar;
