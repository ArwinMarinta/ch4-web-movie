import { useState } from "react";
import Hambuger from "../assets/hamburger.svg";
import Search from "../assets/search2.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

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
          <div className="hidden lg:block py-2 w-[60%] justify-center items-center  ">
            <div className=" flex flex-row h-14 rounded-2xl border-2 border-red-600 mb-4 self-center  ">
              <img src={Search} className="py-2" />
              <input
                placeholder="  Search You Movie"
                className=" bg-transparent w-full text-xl  "
              />
            </div>
          </div>
          <div className="hidden lg:block ">
            <Link className="inline-flex px-6 py-4 rounded-3xl border-2 border-red-600 font-bold text-xl  text-red-600 ml-4">
              Login
            </Link>
            <Link className="inline-flex px-6 py-4 rounded-3xl  bg-red-600 font-bold text-xl  text-white ml-4">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className={`${openSearch ? "block" : "hidden"} lg:hidden`}>
        <div className="w-full flex justify-center items-center px-4">
          <div className="flex flex-row  h-10 rounded-2xl border-2 border-red-600 mb-4 w-full">
            <img src={Search} className="py-2" />
            <input
              placeholder="  Search You Movie"
              className=" bg-transparent w-full "
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={`${openHamburger ? "block" : "hidden"} lg:hidden`}>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link className="inline-flex px-6 py-4 rounded-3xl border-2 border-red-600 font-bold text-xl  text-red-600 ml-4">
            Login
          </Link>
          <Link className="inline-flex px-6 py-4 rounded-3xl  bg-red-600 font-bold text-xl  text-white ml-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  search: PropTypes.func,
};
export default Navbar;
