const Footer = () => {
  return (
    <div className="mx-auto flex flex-col  lg:flex-row  px-4 gap-6 md:px-10 mb-8 md:mb-12 lg:mb-16 xl:mb-26">
      <h1 className=" lg:text-8xl text-red-600 font-bold text-4xl w-full md:text-6xl mt-6 md:mt-10 lg:ml-20">
        Movielist
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  w-full md:mt-14 lg:pr-32 xl:gap-16 ">
        <div className="text-white">
          <h2 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl ">
            RESOURCE
          </h2>
          <div className="flex flex-col mt-2 md:text- xl:text-2xl md:mt-4 ">
            <p>Tailwinds</p>
            <p>JavaScripts</p>
            <p>React JS</p>
            <p>TMBD API</p>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-lg md:text-2xl xl:text-4xl  ">TOOLS</h1>
          <div className="flex flex-col mt-2 md:text-lg xl:text-2xl  md:mt-4 ">
            <p>Github</p>
            <p>Visual Studio Code</p>
            <p>Postman</p>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-lg md:text-2xl xl:text-4xl ">FOLLOW</h1>
          <div className="flex flex-col mt-2 md:text-lg xl:text-2xl  md:mt-4 ">
            <p>Instagram</p>
            <p>Discord</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-lg md:text-2xl xl:text-4xl ">Legal</h1>
          <div className="flex flex-col mt-2 md:text-lg xl:text-2xl  md:mt-4 ">
            <p className="mt-2">Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
