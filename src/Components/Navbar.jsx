const Navbar = () => {
  return (
    <div
      className="flex items-center w-full top-0 left-0 z-40 fixed bg-abu-putih scroll:bg-white"
      id="navbar"
    >
      <div className="w-full mx-auto lg:px-[136px]">
        <div className="flex flex-row items-center relative">
          <div className="px-4 py-4">
            <h1 className="font-bold text-red-600 text-6xl">Movielist</h1>
          </div>

          <div></div>

          <div className="flex items-center px-4">
            <button
              className="block absolute right-4 lg:hidden"
              id="hamburger"
              name="hamburger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 18H21"
                  stroke="red"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12H21"
                  stroke="red"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="red"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="hidden fixed lg:mr-[120px]  bg-white w-1/2 h-screen lg:h-min sm:max-h-none right-0  lg:block lg:max-w-full lg:bg-transparent items-center"
              id="nav-mobile"
            >
              <div className="block ml-4 mr-8 mt-0 lg:flex lg:flex-row  lg:gap-8 lg:items-center lg:h-full lg:justify-end">
                <div className="flex flex-row justify-between items-center lg:hidden lg:h-full">
                  <h3 className="font-bold font-sans text-sm">BCR</h3>
                  <button id="exit" name="exit" className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="#222222"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="#222222"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                <div className="flex gap-6">
                  <a
                    type="button"
                    href="#"
                    className="inline-flex py-2 px-5  rounded-2xl border-2  border-red-600 font-sans text-sm text-red-600 font-bold
                    "
                  >
                    <p className="flex justify-center text-center">Login</p>
                  </a>
                  <a
                    type="button"
                    href="#"
                    className="inline-flex py-2 px-5  rounded-2xl bg-red-600 font-bold text-sm text-white  "
                  >
                    <p className="flex justify-center text-center">Register</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
